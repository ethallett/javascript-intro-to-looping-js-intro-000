function forLoop(array){
for (var i = 0; i <= 25; i++) {
  if(i === 1) {
    return 'I am' + i + 'strange loop';
  } else {
    return 'I am' + i + 'strange loops';
  }
 }
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
