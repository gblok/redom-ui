import {div, label, input, h1, main} from '@cycle/dom'

function render(msg) {

    const res = []

    let i = 0
    while (i < 10) {

        res.push(div('#root', [
            label('Name:'),
            input('.field', {attr: {type: 'text'}}),
            h1([msg])
        ]))

        i++
    }

    return main('.main', res)
}


export default model$ => {


    const vdom$ = model$.map(msg => render(msg))

    const sinks = {
        DOM: vdom$
    }

    return sinks

}
