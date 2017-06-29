Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// let b = [1, 2, 3, 4, 5];
// b.myEach(function(el) {
//   console.log(el % 2 === 0);
// });

Array.prototype.myMap = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i]));
  }
  return res;
};

let b = [1, 2, 3, 4, 5];
// console.log(b.myMap(function(el) {
//     return(el * 2);
// }
// ));

// function () {
//
// }
//
// function functionName() {
//
// }
//
// () => {
//
// }
Array.prototype.myMap2 = function (callback) {
  let res = [];
  this.myEach((el) => { res.push(callback(el)); });
  return res;
};

// let c = [1, 2, 3, 4, 5];
// console.log(c.myMap2(function(el) {
//     return(el * 2);
// }
// ));

Array.prototype.myReduce = function (callback, initialValue) {
  let res = 0;

  if (initialValue) {
    res = initialValue; }
  else {
    res = this[0];
  }

  this.myEach((el) => { res = callback(res, el); });
  return res;
};


let c = [1, 2, 3, 4, 5];
console.log(c.myReduce(function(acc, el) {
    return(acc + el);
}, 6));
