let obj={}
console.log(obj);

let personal={
    name:'himanshu',
    class:'9th c',
    roll :'16',
    gender:'male'
}
// console.log(personal);
console.log(`hello ${personal.name}, goodmorning`);
console.log(personal.gender);
console.log(personal["gender"]);

let captainAmerica = {
    firstName: "Steve",
    lastName: "Rogers",
    friends: ["Bucky", "Tony Stark", "Brue Banner"],
    age: 102,
    isAvenger: true,
    address: {
        state: "Manhattan",
        city: "New York",
        country: "USA" // nesting of objects
    },
    sayhi:function () {
        console.log(`hello ${this.firstname}`);
    }

}
console.log(captainAmerica);
console.log(captainAmerica.friends[2]);
console.log(captainAmerica.sayhi()); // method accessing

// methods :- objects ke ander function

