let nombre = 'frase'
console.log( `Primera ${nombre}.` )
setTimeout( function() {
    console.log('Segunda frase.')
}, 0 )
setTimeout( function() {
    console.log('Tercera frase.')
}, 1000 )
console.log('Cuarta frase.')
