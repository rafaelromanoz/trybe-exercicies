function f(s){
  let quantidade = [];
  const split = s.split('');
  split.forEach((element, index)=>{
    if ( || element === element[index + 1]){
      quantidade = element;
    }
  })
  return quantidade;
}

console.log(f("ababab"));