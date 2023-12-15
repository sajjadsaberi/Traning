// const dub = (num1,num2) => {
//     return num1**num2 ;
// } ;

// console.log(dub(5,2));

//map :

const arr = [2,4,16,88,10,9,0,64] ;

// const newArr = arr.map((item) => item * 2 );

// console.log(newArr) ;

// const fil = newArr.filter((items) => items >= 10) ;

// console.log(fil) ;

const result = arr.reduce((accumulator,currentItem) => accumulator + currentItem,0) ;
console.log(result);

//

const arry = [1,3,5,7,9,11,13,15,17,19] ;

const container = [] ;

arry.forEach((number, index) => {
    console.log("number is :" + number);
    console.log("index is :" + index) ;
}) ;

console.log(arry) ;

//Destructuring :

const data = {
    name: "ali",
    age: "28",
    address: {
        city: "bam",
        street: "bahonar"
    }
};

const age = data["age"] ;
const street = data.address.street ;

console.log(age);
console.log(data.address.city);
console.log(street);