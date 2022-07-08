import { Context } from "koa";
import MarkerModel from "../models/Marker";

export default {
  getMarker: async (ctx: Context, next: any) => {
    try {
      ctx.response.body = {
        result: "succeed",
        data: ctx.request.query.id
          ? await MarkerModel.findAll({
              where: {
                id: ctx.request.query.id,
                belongTo: ctx.request.query.belongTo,
              },
            })
          : await MarkerModel.findAll({
              where: {
                belongTo: ctx.request.query.belongTo,
              },
            }),
      };
    } catch (_e) {
      const e = _e as Error;
      console.log(e);
      ctx.throw(400);
    }
    await next();
  },
  postMarker: async (ctx: Context, next: any) => {
    delete ctx.request.body.data.id;
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
    delete ctx.request.body.id;
    try {
      await MarkerModel.create(ctx.request.body);
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
};
