import { Context } from "koa";
import config from "../config";

export default async (ctx: Context, next: any) => {
  if (ctx.request.headers.authorization !== config.token) {
    ctx.throw(401);
  } else {
    await next();
  }
};
