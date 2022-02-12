// function getready() {
//     console.log(brush)
//     console.log(bathing)
//     console.log(breakfast)
//     console.log(breakfast)
// }

// function add(a,b) {
//     //  sum=a+b;
//      console.log(a+b)
//     // return sum;
// }
// let ans=add(45,45)
// console.log(ans)


// 2. function expression
// let sayHi=function(){
//     console.log('this is funtion expreesion')
// }
// sayHi()
// console.log(""+sayHi)
function abcd(){
    console.log('this is funtion expreesion')
}
// sayHi()
console.log(""+abcd)
abcd()


// js be like:- hmare yha ese hi hota h


function cal(str,a,b) {
    if(str=='add'){
        return function add(a,b) {
            console.log(a+b)
                
        }

    }
}
let returnedFunc=cal('add',2,3);
console.log(returnedFunc)
returnedFunc();
