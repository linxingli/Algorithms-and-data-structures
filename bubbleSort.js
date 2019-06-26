(function() {

  var arr = [5, 4, 3, 2, 1]

  var swap = (curIndex, nextIndex) => {
    let temp = arr[curIndex]
    arr[curIndex] = arr[nextIndex]
    arr[nextIndex] = temp
  }

  // arr.forEach(() => {
  //   arr.forEach((item, index) => {
  //     if (arr[index] > arr[index + 1]) {
  //       swap(index, index+1)
  //     }
  //   })
  // })


  // 改良版
  var length = arr.length
  var count = 0
  for(var i = 0; i < length - 1; i++) {
    for(var j = 0; j < length - 1 - i; j++) {
      count ++
      if (arr[j] > arr[j + 1]) {
        swap(j, j+1)
      }
    }
  }

  console.log(count, arr);
  
})()