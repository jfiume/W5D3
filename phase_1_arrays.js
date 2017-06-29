Array.prototype.uniq = function () {
  let res = [];
  this.forEach(function(el){
    if (res.includes(el)) {}
    else {
     res.push(el);
   }
 });
  return res;
};

// let a = [2, 3 ,4, 6, 4, 3];
//  console.log(a.uniq());


Array.prototype.twoSum = function () {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++){
      if (this[i] + this[j] === 0) {
        res.push([i, j]);
      }
    }
  }
  return res;
};


// let a = [2, 3 ,4, 6, -4, 3];
//  console.log(a.twoSum());


Array.prototype.transpose = function () {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push([]);
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
        res[i][j] = this[j][i];
    }
  }

  return res;
};

let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(a.transpose());
