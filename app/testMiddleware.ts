import Koa from 'koa';

const testMiddleware = () => {
  const middleware: Koa.Middleware = async (ctx, next) => {
    console.log(`${new Date()}`);
    await next();
  };
  return middleware;
};

export default testMiddleware;
