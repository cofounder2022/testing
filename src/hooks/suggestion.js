function nativeSearch(long,sort) {
  for (var i=0; i < long.length; i++) {
      for(var j= 0; j < sort.length; j++) {
          console.log(sort[j], long[i + j] )
          if(sort[j] !== long[i + j]) {
              
              console.log('break !!!')
              break;
          }
          if(j === sort.length - 1) {
              console.log("Found one!!")
          }
      }
  }
}