import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { trpcRouter } from "./trpc";

const ideas = [
  { name: "fjdkls", nick: "djksnfl", description: "dkgdnsx" },
  { name: "fjdkls", nick: "djksnfl", description: "dkgdnsx" },
  { name: "fjdkls", nick: "djksnfl", description: "dkgdnsx" },
];

const expressApp = express();
expressApp.get("/hello", (req, res) => {
  res.send("hi");
});

expressApp.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  }),
);

expressApp.listen(3000, () => {
  console.info("Listening at http://localhost:3000");
});
