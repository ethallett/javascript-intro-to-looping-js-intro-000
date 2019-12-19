function forLoop(array) {
for (let i = 0; i < 26; i++) {
  if (i === 1) {
    return 'I am 1 strange loop';
  } else {
    return 'I am ${i} strange loops';
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
    \\[loop body]
  } while (function incrementVariable() {
    i = i + 1;
    return i
  }
}
