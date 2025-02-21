import { initTRPC } from "@trpc/server";

const ideas = [
  { name: "fjdkls", nick: "dksnfl", description: "dkgdsx" },
  { name: "fjdklk", nick: "djknfl", description: "dkdnsx" },
  { name: "fjdks", nick: "djksnfl", description: "dkgdnsx" },
];

const trpc=initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas };
  }),
});

export type TrpcRouter =typeof trpcRouter
