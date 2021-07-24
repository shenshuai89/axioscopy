const koa = require('koa')
const app = new koa()
const koaRouter = require('koa-router')

const router = new koaRouter()

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , Request-Ajax, *');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
})
router.get('/', async ctx => {
    console.log("objectheader", ctx.header);
    ctx.body = 'hello world'
})

app.use(router.routes())
app.listen(4321, () => {
    console.log("server running on port 4321");
})