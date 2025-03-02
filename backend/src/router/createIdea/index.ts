import { trpc } from '../../lib/trpc'
import { zCreateIdeaTrpcInput } from './input'

export const createIdeaTrpcRoute = trpc.procedure.input(zCreateIdeaTrpcInput).mutation(async ({ input, ctx }) => {
  const exIdea = await ctx.prisma.idea.findUnique({
    where: {
      nick: input.nick,
    },
  })
  if (exIdea) {
        throw Error('Обсуждение с этим ником уже существует.')
      }
      await ctx.prisma.idea.create({
        data: input,
      })
  return true
})
