import Router from "koa-router";

import marker from "./marker";

const router = new Router();

router.use(marker.routes());

export default router;
