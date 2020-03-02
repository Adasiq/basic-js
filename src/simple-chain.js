const chainMaker = {
   array: [],
  getLength() {
    return this.array.length;
    // remove line with error and write your code here
  },
  addLink(value) {
     if(value !== undefined) this.array.push(value);
      else this.array.push('');
     return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
   if (typeof(position) != "number" || position - 1 < 0 || position > this.array.length){
      this.array = [];
      throw Error();
   }
   this.array.splice(position - 1, 1);
   return this;
    // remove line with error and write your code here
  },
  reverseChain() {
     this.array.reverse();
     return this;
    // remove line with error and write your code here
  },
  finishChain() {
     let result = "";
     for(let i = 0; i < this.array.length; i++){
        result = result + '( ' + this.array[i] + ' )~~';
     }
     this.array = [];
     return result.slice(0, -2);
    // remove line with error and write your code here
   }
};

module.exports = chainMaker;
