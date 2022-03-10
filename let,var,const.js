// console.log(x);
// var x=12
// let b=100;
// console.log(b);
// // blocks
// // -> It is used to compound the statement

function outer() {
    var a=7;
    function inner() {
        console.log(a);
    }
    return inner
    a=10
}
var c=outer()
console.log(c);
c()