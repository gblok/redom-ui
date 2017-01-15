import compose from 'koa-compose'
import Router from 'koa-router'
import importDir from 'import-dir'


const middle = []
const list = [['portal', {}]]


for (let [dir, opts] of list) {

    const router = new Router(Object.assign({}, opts))
    const routes = importDir(dir)

    Object.keys(routes).forEach(name => routes[name](router))

    middle.push(router.routes())
    middle.push(router.allowedMethods())
}


export default () => compose(middle)