import Koa from "koa";
import bodyParser from "koa-bodyparser";
import json from "koa-json";
import logger from "koa-logger";
import cors from "@koa/cors";
import router from "./routes";
import config from "./config";

import checkTokenMiddleware from "./middleware/checkToken";

export default async () => {
  const app = new Koa();

  app.use(logger());
  app.use(cors());
  app.use(
    bodyParser({
      enableTypes: ["json", "form", "text"],
    })
  );
  app.use(json());
  app.use(checkTokenMiddleware);
  app.use(router.routes());

  app.listen(config.port);

  console.log("app started at port " + config.port.toString() + "...");
};
