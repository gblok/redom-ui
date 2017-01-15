export default sources => {

    return {
        name$: sources.DOM
            .select('.field')
            .events('input')
            .map(e => e.target.value)
            .startWith('')
    }

}


