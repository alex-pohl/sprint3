const finalFunction = require('./baby-steps');


//Funciona con numeros pasados como rgumentos
test('De los inputs [1,2,3] debe devovler la suma "6"', () => {
    expect(finalFunction.finalFunction(["1","2","3"])).toBe('6');
});


//Funciona si lo nos pasan algo que no es un numero como argumento
test('De los inputs ["1","1","r",] debe devovler la suma de los numeros, 2.', () => {
    expect(finalFunction.finalFunction(['1','1','r'])).toBe('2');
});