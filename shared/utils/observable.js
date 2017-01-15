var observable = function (el) {


    el = el || {}


    var callbacks = {}, slice = Array.prototype.slice


    // extend the el object adding the observable methods
    Object.defineProperties(el, {

        on: {

            value: function (event, fn) {

                if (typeof fn == 'function') {
                    (callbacks[event] = callbacks[event] || []).push(fn)
                }

                return el
            },
            enumerable: false,
            writable: false,
            configurable: false
        },


        off: {
            value: function (event, fn) {
                if (event == '*' && !fn) callbacks = {}
                else {
                    if (fn) {
                        var arr = callbacks[event]
                        for (var i = 0, cb; cb = arr && arr[i]; ++i) {
                            if (cb == fn) arr.splice(i--, 1)
                        }
                    } else delete callbacks[event]
                }
                return el
            },
            enumerable: false,
            writable: false,
            configurable: false
        },


        one: {
            value: function (event, fn) {
                function on() {
                    el.off(event, on)
                    fn.apply(el, arguments)
                }

                return el.on(event, on)
            },
            enumerable: false,
            writable: false,
            configurable: false
        },


        trigger: {
            value: function (event) {



                // getting the arguments
                var arglen = arguments.length - 1,
                    args = new Array(arglen),
                    fns,
                    fn,
                    i

                for (i = 0; i < arglen; i++) {
                    args[i] = arguments[i + 1] // skip first argument
                }

                fns = slice.call(callbacks[event] || [], 0)

                for (i = 0; fn = fns[i]; ++i) {
                    fn.apply(el, args)
                }

                if (callbacks['*'] && event != '*')
                    el.trigger.apply(el, ['*', event].concat(args))


                return el
            },
            enumerable: false,
            writable: false,
            configurable: false
        }
    })

    return el

}

export default observable