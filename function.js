function add(a,b) {
    return a+b;
}

function multiply(a, b) {
    return a * b;
  }

  console.log("add(1, 2): "+ add(1, 2));
  console.log("multiply(1, 2): "+ multiply(1, 2));


  let operation1 = add; //ho messo la funzione add dentro operation1
  console.log("operation1: " + operation1(2,3));



function addPlusOne(a, b) {
    return add(a, b) + 1;
}
console.log("addPlusOne(2, 10): " + addPlusOne(2, 10));

function multiplyPlusOne(a, b) {
    return multiply(a, b) + 1;
}
console.log("multiplyPlusOne(2, 10): " + multiplyPlusOne(2, 10));

//funzione che funziona x qualsiasi operazione rispetto alle 2 sopra
function anyPlusOne(oper, a, b) {
  return oper(a,b)+1;
}
console.log("anyPlusOne(add, 2, 10): " + anyPlusOne(add, 2, 10));
console.log("anyPlusOne(multiply, 2, 10): " + anyPlusOne(multiply, 2, 10));