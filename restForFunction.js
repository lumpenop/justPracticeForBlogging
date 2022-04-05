function sum(...rest) {
    return rest.reduce((acc, cur) => acc + cur, 0);
  }
  
  const result = sum(1, 2, 3, 4);
  console.log(result); 