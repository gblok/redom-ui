const stores = ['page']

let _stores = new Map()

class Flux {

    constructor() {
        this.init()
    }

    init() {
        for (let id of stores) {
            this.add(id, require('../store/' + id + '.js').default)
        }
    }

    get list(){
        return _stores
    }

    get(id) {
        return _stores.get(id)
    }

    add(id, store) {
        _stores.set(id, store)
    }



}

const flux = new Flux()
export default flux


