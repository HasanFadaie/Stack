function stack(initialSize = 10) {
    this.items = Array(initialSize)
    this.index = 0
    // console.log(`I created array of ${this.items.length} null elements`)
  }
  
  stack.prototype.size = function() {
    return this.index
  }

  stack.prototype.push = function(val){
    this.items[this.index++] = val;    
  }

  stack.prototype.pop = function(){    
    return this.items[--this.index];
  }
  
  stack.prototype.pushArray = function(array){
    for(let i in array){
      this.push(array[i])
    }
  }
  
  module.exports = stack