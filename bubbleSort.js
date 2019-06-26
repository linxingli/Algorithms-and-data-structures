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
  
  // 即便我们做了这个小改变，改进了一下冒泡排序算法，但我们还是不推荐该算法，它的复杂度是O(n2)。
  console.log(count, arr);
  
})()