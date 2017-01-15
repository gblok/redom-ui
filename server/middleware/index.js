import favicon from 'koa-favicon'
import compose from 'koa-compose'
import compress from 'koa-compress'
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import serve from 'koa-static'
import etag from 'koa-etag'

import {STATIC} from '../config'

export default () => compose([
    compress(),
    etag(),
    serve(STATIC),
    favicon(),
    helmet(),
    logger()
])