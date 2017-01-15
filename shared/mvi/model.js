export default intent => {

    return intent.name$.map(name =>
        name
            ? `Hello, ${name}!`
            : 'Hello! Please enter your name...')
}