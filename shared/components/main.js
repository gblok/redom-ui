import {el} from 'redom'
import flux from '../utils/flux'
let _state = new WeakMap()
//import observable from '../utils/observable'

const store = flux.get('page')


export class Main {

    constructor() {

        this.el = el('h1', _state)
        this.state = 'click me'
        this.bindEvents()

    }


    set state(state) {
        _state.set(this, state)
        this.el.textContent = state
    }

    get state() {
        return _state.get(this)
    }


    click(e) {
        store.trigger('start')
    }

    bindEvents() {


        store.on('init', state => {
           // console.log('init Out')
            this.state = state
        })

        this.el.onclick = e => this.click(e)


    }
}

const main = new Main()
export default main