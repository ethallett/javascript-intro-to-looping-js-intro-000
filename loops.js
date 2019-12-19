function forLoop(array){
  for (let i = 0; i <= 25; i++) {
  if(i == 1) {
    console.log('I am 1 strange loop');
  } else {
    console.log('I am ${i} strange loops');
  }
 }
  return forLoop
}

function whileLoop(n) {
  let countdown = n;
  while(countdown > 0){
   console.log(--countdown);
 }
   return 'done'
}

function doWhileLoop(num) {
  do {
  } while (function incrementVariable() {
    i = i + 1;
    return i
  }
}
