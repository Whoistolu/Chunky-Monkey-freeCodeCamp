function chunkArrayInGroups(arr, size) {
    let gropus = [];
    while (arr.length > 0) {
        gropus.push(arr.slice(0, size));
        arr= arr.slice(size);
    }
  return gropus;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));