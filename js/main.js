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

