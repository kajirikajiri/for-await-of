var asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      }
    };
  }
};

var arr = ['a','b','c','d','e']
arr.forEach((_,i)=>console.log(i))

const hoge = async () => {
  console.log(arr)
  console.log(typeof arr)
  arr.forEach((a,i)=>console.log(i,a))
  console.log('start')
  for await (num of asyncIterable) {
    console.log('for-start')
    console.log(num);
    console.log('for-next')
  }
  console.log('end')
  arr.forEach(a=>console.log(a))
}


const con = (echo) => {
  console.log(echo)
}

const huge = (con) => {
  con('heeeeeeeeeeeeeeeeeeey')
}

(async function (){
  await hoge()
  huge(con)
})()