import { Context } from "koa";
import MarkerModel from "../models/Marker";
import { v4 as uuidv4 } from "uuid";

export default {
  getMarker: async (ctx: Context, next: any) => {
    try {
      ctx.response.body = {
        result: "succeed",
        data: MarkerModel.findAll({
          where: {
            id: ctx.request.query.id,
          },
        }),
      };
    } catch (_e) {
      ctx.throw(400);
    }
    await next();
  },
  postMarker: async (ctx: Context, next: any) => {
    try {
      await MarkerModel.update(ctx.request.body.data, {
        where: {
          id: ctx.request.body.id,
        },
      });
      ctx.response.body = {
        result: "succeed",
      };
    } catch (_e) {
      const e = _e as Error;
      console.log(e.message);
      ctx.throw(400);
    }
    await next();
  },
  deleteMarker: async (ctx: Context, next: any) => {
    try {
      ctx.response.body = {
        result:
          (await MarkerModel.destroy({
            where: {
              id: ctx.request.body.id,
            },
          })) == 1
            ? "succeed"
            : "failed",
      };
    } catch (_e) {
      const e = _e as Error;
      console.log(e.message);
      ctx.throw(400);
    }
    await next();
  },
  putMarker: async (ctx: Context, next: any) => {
    try {
      ctx.request.body.id = uuidv4();
      await MarkerModel.create(ctx.request.body);
      ctx.response.body = {
        result: "succeed"
      }
    } catch (_e) {
      const e = _e as Error;
      console.log(e.message);
      ctx.throw(400);
    }
    await next();
  },
};
