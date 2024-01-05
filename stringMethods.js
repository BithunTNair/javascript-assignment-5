let str= "Hello My Name Is Bithun...";
// 1 concat

let string= str.concat('What Is Your Name ?');
console.log(string);

// 2 endsWith

let end= str.endsWith('...');
console.log(end);

// 3 includes

let include= str.includes('My');
console.log(include);

let includes= str.includes('are');
console.log(includes);

// 4 indexOf

let indexOf=str.indexOf('Name');
console.log(indexOf);

let index=str.indexOf('M');
console.log(index);

// 5 lastIndexOf

let lastIndex= str.lastIndexOf('M');
console.log(lastIndex);

// 6 match

let match= str.match('My');
console.log(match);

let match2= str.match('my');
console.log(match2);

let match3=str.match(/My/);
console.log(match3);

let match4=str.match(/My/g);
console.log(match4);

let match5=str.match(/My/gi);
console.log(match5);

// 7 matchAll

let string2= " MERN Stack , Mongo DB ";
let match6= string.matchAll("M");
console.log(Array.from(match6));

// 8 padEnd

let pad='Bithun';
let pad2= pad.padEnd(13," T Nair");
console.log(pad2);

let pad3= "Hell";
let pad4= pad3.padEnd(7,"o");
console.log(pad4);

// 9 padStart

let pad5= "T Nair";
let pad6= pad5.padStart(13,"Bithun ");
console.log(pad6);

let pad7= '8';
let pad8= pad7.padStart(4,2);
console.log(pad8);

// 10 repeat

let text= ' helloo.. Hi ';
let repeat=text.repeat(5);
console.log(repeat);

// 11 replace

let replace= str.replace("Bithun","Arya");
console.log(replace);

// 12 search 

let searches= str.search("Bithun");
console.log(searches);

let searches2= "My place is TVM and My Mobile is Samsung" ;
let searches3= searches2.search('is');
console.log(searches3);

// 13 slice

let slice= str.slice(17,24);
console.log(slice);

let slice2=str.slice(-10);
console.log(slice2);

// 14 split

let split= str.split(' ');
console.log(split);

let split2=str.split('Is');
console.log(split2);

// 15 startsWith

let start= str.startsWith("Hello");
console.log(start);

// 16 substr

let substr= str.substr(0,5);
console.log(substr);

let substr2= str.substr(6);
console.log(substr2);

// 17 substring

let substring= str.substring(9,13);
console.log(substring);

// 18 toLowerCase

let lowerCase= str.toLowerCase();
console.log(lowerCase);

// 19 toUpperCase

let upperCase= str.toUpperCase();
console.log(upperCase);

// 20 trim

let text2= '    Superman   ';
let trim=text2.trim();
console.log(trim, " ,length of the text:",trim.length);

// 21 trimEnd

let trimEnd= text2.trimEnd();
console.log(trimEnd," , length of the text",trimEnd.length);

// 22 trimStart

let trimStart= text2.trimStart();
console.log(trimStart," , length of the text",trimStart.length);

// 23 charAt

let charAt= str.charAt(17);
console.log(charAt);

// 24 charCodeAt

let charCode= str.charCodeAt(17);
console.log(charCode);






