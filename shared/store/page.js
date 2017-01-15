import observable from '../utils/observable'

let _state = new WeakMap()

let counter = 0

class Page {

    constructor() {
        observable(this)
        this.bindEvents()

    }

    get state() {
        return _state.get(this)
    }

    set state(state) {

        _state.set(this, state)
        this.trigger('init', this.state)
    }

    bindEvents() {
        this.on('start', () =>  this.state = `wowowo Ease ${counter ++}`)
    }
}


const page = new Page()


export default page

