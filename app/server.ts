import Koa from "koa";
import Router from "@koa/router";
import { RegisterRoutes } from "./routes";
import testMiddleware from './testMiddleware';

const app = new Koa();

const router = new Router();

// router.get('/test/all', (ctx, next) => ctx.body = [1,2,3]);
// router.get('/test/:id',  (ctx, next) => ctx.body = ctx.params.id);

RegisterRoutes(router);

app.use(router.routes()).use(router.allowedMethods());
app.use(testMiddleware())

export default app;  
  