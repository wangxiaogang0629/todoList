const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(9000, (e) => {
  console.log("server run on  localhost:9000");
})