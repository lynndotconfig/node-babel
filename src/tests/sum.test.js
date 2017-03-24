const sum = require('./sum');

test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

//toBe user ==== to test exact equality
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
})

//toEqual recursively checks every field of object or array
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 })
})

//opposite of a matcher
test('adding positive numbers is not zero', () => {
    for(let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0)
        }
    }
})

//treat truthiness differently
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

//string
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
})

//array
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
];
test('the shoping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
});

//execption
function compileAndoridCode() {
    throw new ConfigError('you are using the wrong SDK');
}
test('compiling andorid goes as expected', () => {
    expect(compileAndoridCode).toThrow();
    expect(compileAndoridCode).toThrow(ConfigError);

    //you can also user the exact error message or a regexp
    expect(compileAndoridCode).toThrow('you ar using the wrong SDK');
    expect(compileAndoridCode).toThrow(/SDK/)
})

