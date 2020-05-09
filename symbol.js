// not support new Symbol()
// Symbol is always return singleton value
console.log(Symbol.asyncIterator)
console.log(Symbol)
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');
console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol1)
console.log(symbol2)
console.log(symbol3)
console.log(symbol2 === 42);
// expected output: false

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));
// expected output: false

var sym = Symbol("foo");
typeof sym;     // "symbol" 
var symObj = Object(sym);
typeof symObj;  // "object"
console.log(symObj)


// Symbol.iterator
// オブジェクトのための既定のイテレーターを返すメソッドです。for...of で使用されます。

// Symbol.asyncIterator 
// A method that returns the default AsyncIterator for an object. for await of で使用されます。