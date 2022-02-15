// arrays-> we can store ant type of values in single arrays
let cars=["bmw","audi",1,2,3,true]
console.log(cars[0]);

//  replacement of array

cars[0]="mahindra"
console.log(cars[0]);

// adding elements in array

cars[7]="honda"
console.log(cars);


// methods of Array

// 1) pop method:- this method removes the elements from the last of the array
cars.pop()
console.log("after poping"+cars);
//  2) push method :- it push the new Element at the end of the Array

cars.push("tata")
console.log("after pushing"+cars);

// 3) unshift :- at elements at the start of the array
cars.unshift("moto") 
console.log("after unshift"+cars);

// 4) shift :- it removes the element from the 0th index of Array
cars.shift()
console.log("after shift method"+cars)
console.log(cars);
console.log(cars.length)


// 2d arrays
let array2d=[
    [1,2,4],
    [6,7,8],
    [12,34,45]
]
console.log(array2d);
console.table(array2d);
console.log(array2d[1][2]);
