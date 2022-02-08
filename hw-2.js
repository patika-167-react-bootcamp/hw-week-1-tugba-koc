let arr = ["alpha", "beta", "gamma", "delta"];

Array.prototype.insensitiveIncludes = function (item) {
  // lowercase passed item
  item=item.toLowerCase();  
  // lowercase all items in the array
  this.forEach((el) => el.toLowerCase());
  // return true if the item is in the array
  return this.includes(item)
};

console.log(arr.insensitiveIncludes("ALPHA"));