import pug from 'pug'
import path from 'path'
import {VIEWS} from '../config'

const viewPath = path.resolve(VIEWS, 'base.pug')
const tpl = pug.compileFile(viewPath, {doctype: 'html'})

export default () => async ctx => {


    console.time('render')
    ctx.body = await tpl({})
    console.timeEnd('render')
}
