import Koa from 'koa'
import {PORT} from './config'
import middleware from './middleware'
import routes from './routes'


const app = new Koa()


app
    .use(middleware())
    .use(routes())
    .use(ctx => ctx.status = 404)
    .listen(PORT, () => console.log(`app port ${PORT}`))

export default app