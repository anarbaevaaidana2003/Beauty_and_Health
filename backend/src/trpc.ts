import { initTRPC } from "@trpc/server";
import _ from 'lodash'
import {z} from 'zod'
const ideas=_.times(100,(i) => ({
  nick:`some-nick-${i}`,
  name:`Idea ${i}`,
  description: `Description ${i}`,
  text:_.times(100,(j)=>`<p> Text number ${j} of idea ${i}</p>`).join(''),

}))
console.log(ideas)
/*const ideas = [
  { name: "fjdkls", nick: "dksnfl", description: "dkgdsx" },
  { name: "fjdklk", nick: "djknfl", description: "dkdnsx" },
  { name: "fjdks", nick: "djksnfl", description: "dkgdnsx" },
];*/

const trpc=initTRPC.create()
export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas: ideas.map((idea)=>_.pick(idea,['nick','name','description']))};
  }),
  getIdea:trpc.procedure.input(
    z.object({
      someNick:z.string(),
    }),

  ).query(({input})=>{
    const idea=ideas.find((idea)=>idea.nick ===input.someNick)
    return {idea:idea || null}
  })
});

export type TrpcRouter =typeof trpcRouter
