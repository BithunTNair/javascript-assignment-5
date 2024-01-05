const array1=[8,6,9,2,4,7,3,0];
const array2=['apple','orange','banana','mango','cherry','strawberry'];
const array3=[32,12,15,46,98];

// // 1 concat
 let newArray= array1.concat(array2);
console.log(newArray);

// 2 every

let check= array3.every(function(val){
    if(val>0){
        return true;
    }
})
console.log(check);

// 3 fill

let get= array1.fill(10);
console.log(get);
let a= new Array(5);
a.fill('Bithun');
console.log(a);

// 4 find

const checking= (val)=>{
    return val<7;
}
let b= array1.find(check);
console.log(b);

// 5 findIndex

const know= (val)=>{
    return val<7;
}
let findIndex= array1.findIndex(know);
console.log(findIndexndex);

// 6 flat

const array4= [5,7,9,['bithun','unni']];
let set= array4.flat();
console.log(set);

// 7 forEach

array2.forEach((fruits,index)=>{
    console.log(fruits,":",index);
})

// 8 includes

let info= array2.includes('mango');
console.log(info);

let inf= array2.includes('king');
console.log(inf);

// 9 indexOf

let index= array3.indexOf(15);
console.log(index);

 array2[3]='watermelon';
 console.log(array2);

let e= array2.indexOf('mango',4);
console.log(e);

let ind= array2.indexOf('mango');
console.log(ind);

// 10 join

let d= array1.join('+');
console.log(d);

// 11 lastindexOf

let inde= array1.lastIndexOf(3);
console.log(inde);

// 12 pop

array1.pop();
array1.pop();
console.log(array1);

// 13 push

array3.push(100);
console.log(array3);

array2.push('cherry');
console.log(array2);

// 14 reverse

 let arr= array1.reverse();
 console.log(arr);

 array2.reverse();
 console.log(array2);

// 15 unshift

array2.unshift('grape');
console.log(array2);

// 16 shift

array1.shift();
console.log(array1);

// 17 slice

let sets= array1.slice(0,2);
console.log(sets);

let set1= array1.slice(3);
console.log(set1);

// 18 some

let some= array1.some(function(value){
    if(value===2){
        return true; 
    }
})
console.log(some);

// 19 sort

let sort= array2.sort();
console.log(sort);

let sort2= array1.sort((val1,val2)=>{
    return val1-val2;
})
console.log(sort2);

// 20 splice

array1.splice(4,1,1000);
console.log(array1);

 array1.splice(1,2);
 console.log(array1);

let see= array1.splice(1,2);
console.log(see);

// 21 toString

let string= array3.toString();
console.log(string);

// 22 filter

let filter= array1.filter((val)=>{
    if(val<5){
        return val;
    }
})
console.log(filter);

// 23 reduce

let reduce= array1.reduce((a,b)=>{
    return a+b;
})
console.log(reduce);

// 24 map

const array5= [2,3,4,5,6];
let map= array5.map((val)=>{
    return reresult=val+5;
})
console.log(map);










