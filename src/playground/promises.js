const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('resolved data');
    reject("you're an idiot.")
  }, 2000);
});
console.log('before');
promise.then((data) => {
  console.log(data);
}).catch((e) => console.log(e));


console.log('after');