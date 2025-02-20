import { initTRPC } from "@trpc/server";

const ideas = [
  { name: "fjdkls", nick: "djksnfl", description: "dkgdnsx" },
  { name: "fjdkls", nick: "djksnfl", description: "dkgdnsx" },
  { name: "fjdkls", nick: "djksnfl", description: "dkgdnsx" },
];

const trpc=initTRPC.create()

const x: number="hello"
if (true) {console.log(123)}
export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas };
  }),
});

export type TrpcRouter =typeof trpcRouter
