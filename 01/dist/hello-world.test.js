const {function01} = require('./hello-world.js');

test('Imprime "hello world" en la consola', ()=> {
    const consoleSpy = jest.spyOn(global.console, 'log');

    function01();

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('HELLO WORLD');


});
