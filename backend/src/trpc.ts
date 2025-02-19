import { initTRPC } from "@trpc/server";

const trpc = initTRPC.create();
const ideas = [
  { name: "fjdkls", nick: "djksnfl", description: "dkgdnsx" },
  { name: "fjdkls", nick: "djksnfl", description: "dkgdnsx" },
  { name: "fjdkls", nick: "djksnfl", description: "dkgdnsx" },
];
export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas };
  }),
});
export type TrpcRouter =typeof trpcRouter
