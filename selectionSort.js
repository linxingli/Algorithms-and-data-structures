(function() {
  
  var arr = [5, 4, 3, 2, 1]
  var swap = (curIndex, nextIndex) => {
    let temp = arr[curIndex]
    arr[curIndex] = arr[nextIndex]
    arr[nextIndex] = temp
  }
  var length = arr.length,
      minIndex
      
  for(var i = 0; i < length - 1; i++) {
    minIndex = i
    for(var j = i; j < length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      swap(i, minIndex)
    }
  }

  console.log(arr);
  
})()