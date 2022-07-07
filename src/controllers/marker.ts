import { Context } from "koa";

export default {
  getMarker: async (ctx: Context, next: any) => {
    ctx.body = "get"
  },
  postMarker: async (ctx: Context, next: any) => {
    ctx.body = "post"
  },
  deleteMarker: async (ctx: Context, next: any) => {
    ctx.body = "del"
  },
};
