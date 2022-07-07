import { Context } from "koa";
import MarkerModel from "../models/Marker";

export default {
  getMarker: async (ctx: Context, next: any) => {
    await next();
  },
  postMarker: async (ctx: Context, next: any) => {
    await next();
  },
  deleteMarker: async (ctx: Context, next: any) => {
    ctx.response.body = {
      result: await MarkerModel.destroy({
        where: {
          id: ctx.request.body.id,
        },
      }) == 1,
    };
    await next();
  },
  putMarker: async (ctx: Context, next: any) => {
    await MarkerModel.create(ctx.request.body);
    await next();
  },
};
