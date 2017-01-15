import pug from 'pug'
import util  from  'loader-utils'

export default function (source) {

    this.cacheable && this.cacheable(true)
    const query = util.parseQuery(this.query)

   // const req = util.getRemainingRequest(this)

    const template = pug.compile(source, {
        filename: this.resourcePath,
        doctype: query.doctype || 'html',
        self: query.self,
        pretty: query.pretty || false,
        compileDebug: this.debug || false,
        //globals : ['require']
        //locals:  {require: require},
        //globals : {DataCards : require('../src/pug/data/cards')}
    })


    return template({})
}

