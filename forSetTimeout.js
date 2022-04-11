function fn() {
    for (var i = 0; i < 10; i += 1) {
      function a(i){
        setTimeout(() => console.log(i))
      }
      a(i);
    }
}

fn();