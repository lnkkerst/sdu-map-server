import Router from "koa-router";
import marker from "../controllers/marker";

const router = new Router();

router.get("/marker", marker.getMarker);
router.post("/marker", marker.postMarker);
router.delete("/marker", marker.deleteMarker);

export default router;
