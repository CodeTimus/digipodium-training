// Arrays
let fruit =["apple","mango","banana","pineapple","orange"];
console.log(fruit);

console.log(fruit[0]);
console.log(fruit[3]);
console.log(fruit.slice(1,3));
console.log(fruit.slice(2));

console.log("*******************-Array functions********************************")
// push() - add element at the end of the array
// Pop() - remove element from the end of the array 
// shift()- remove elemnet from the start of the array 
// unshift()- add elemnet at  the start of the array
// indexOf() - find the index of the element 
// concat()- merge two array
// forEach()- iterate through the arrray
// Map()- iterate through the arrray and return new array 
// filter()- filter the array based on condition

fruit.push("grapes");
fruit.pop();
fruit.shift();
fruit.unshift("kiwi");

console.log(fruit)

let fruit2 = ["watermelon","papaya","guava"]
newArray = fruit.concat(fruit2);
console.log(newArray);

let num = [1,2,3,4,5,6,7,8,9,10];
num.forEach(function(num){
    console.log(num*2);
})

console.log("***************************************************")


num.forEach((num) => {
  console.log(num**2);
})

console.log("******************using loop**********************************")

number = [1,2,3,4,5,6,7,8,9,10]
for (let i=0;i<number;i++){
    console.log(number[i]**3);
}

console.log("*******************using FOREACH funtion*******************************")

number.forEach((x)=> {
    console.log(x**3);
})
console.log("-------------using MAP function-----------------")

let newNumber = number.map((x)=>x**3);
console.log(newNumber)

console.log("*************using FILTER FUNCTION********************")

array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let eveNum =[];
for(let i =0; i<array.length;i++){
    if (array[i] % 2==0){
        eveNum.push(array[i]);
    }
}
console.log(eveNum);
console.log("**************************************************************************")

let colors = ['red','white','blue','yellow','pink',"orange",'purple']
let colors2 = colors.filter((clr) => clr.length>4);
console.log(colors2)


