// let x = 1;

// console.log(x);

// let a = [56,76,89,2,0];

// console.log(a)
// console.log(a.length)

// a.push(100);
// console.log(a);

// console.log(a[3]);

// let b = ["car",'truck',"bus"];
// console.log(b)

// console.log(b[2]);

// for (let i = 0; i<b.length; i++) {
//     console.log('foo', i, b[i]);
// }

let rectangle = {width: 25, height: 50, area: ()=>25*50}


let person1 = {name: 'Viv', age:15}
let person2 = {name: 'Liam', age:15}
let person3 = {name: 'Alex', age:15}

let people=[person1, person2, person3]

console.log((person1.age + person2.age + person3.age) / 3)

let sum=0;
for (let i=0; i<people.length; i++) {
    sum += people[i].age
}

console.log(sum / people.length);