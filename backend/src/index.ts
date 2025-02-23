import express from "express";
import cors from 'cors'
import { applyTrpcToExpressApp } from './lib/trpc'
import { trpcRouter } from './router'

const expressApp = express();

expressApp.use(cors())
expressApp.get("/hello", (req, res) => {
  res.send("hi");
});

applyTrpcToExpressApp(expressApp, trpcRouter)

expressApp.listen(3000, () => {
  console.info("Listening at http://localhost:3000");
});
