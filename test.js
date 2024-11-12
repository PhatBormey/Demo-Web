// let numbers=[1,2,3,4,5,6,7,8];
// let oddNums=numbers.filter(isOdd);
// let evenNums=numbers.filter(isEvunt);
// console.log(oddNums);
// console.log(evenNums);
// function isEvunt(element){
//     return element %2===0;
// }
// function isOdd(element){
//     return element %2!==0;
// }

// const price =[200,300,250,280,400];
// const total =price.reduce(function(ac,cr){
//     return ac+cr;
// },0);
// console.log(`Total Price is ${total.toFixed(2)} .`);
//  const maxSalary=price.reduce(function(ac,cr){
//     return Math.max(ac,cr);
//  },0);
//  const minSalary=price.reduce(function(ac,cr){
//     return Math.min(ac,cr);
//  });
//  console.log(`The max salary is ${maxSalary.toFixed(2)} .`);
//  console.log(`The min salary is ${minSalary.toFixed(2)} .`);
// const hello = (name, age) => {
//   console.log(`Hello ${name}`);
//   console.log(`You are ${age} years old.`);
// };
// hello("Bormey",23);

// setTimeout(()=>console.log("Goooo"),2000);

// const arr = [1, 2, 3, 4, 5];
// const square = arr.map((element) => Math.pow(element, 2));
// const cube = arr.map((element) => Math.pow(element, 3));
// const evanNums=arr.filter((element)=>element%2===0);
// const oddNums=arr.filter((element)=>element%2!==0);
// const total=arr.reduce((ac,cr)=>ac+cr);
// console.log(`My array : ${arr}`);
// console.log(square);
// console.log(cube);
// console.log(evanNums);
// console.log(oddNums);
// console.log(total);
// const name = "Ranny";
// const student = {
//   name: "Bormey",
//   age: 23,
//   country: "Cambodia",
//   sayHello: function () {
//     const say = `Hello my name is ${this.name},I'm ${this.age} years old \nand I come from ${this.country} . `;
//     return say;
//   },
// };
// const student1 = {
//   name: "Phanna",
//   age: 24,
//   country: "Cambodia",
//   sayHello1: function () {
//     const say = `Hello my name is ${this.name}`;
//     return say;
//   },
// };
// console.log(student.sayHello(), "\n------------------------");
// console.log(student1.sayHello1());

// const car1={
//   make: "Ford",
//   model:"Mustang",
//   year:2024,
//   color: "Black",
//   drive:function(){
//     const dri=`You drive the ${this.model}`;
//     return dri;
//   }
// }
// const car2={
//   make: "Toyota",
//   model:"Ford Raptor",
//   year:2024,
//   color: "Black",
//   drive:function(){
//     const dri=`You drive the ${this.model}`;
//     return dri;
//   }
// }
// const car3={
//   make: "Chevrolet",
//   model:"Camero",
//   year:2024,
//   color: "Black",
//   drive:function(){
//     const dri=`You drive the ${this.model}`;
//     return dri;
//   }
// }
// console.log(car1.drive());
// console.log(car2.drive());
// console.log(car3.drive());

// function car(make,model,year,color){
//   this.make=make;
//   this.model=model;
//   this.year=year;
//   this.color=color;
//   this.drive=function(){
//     const dri=`You are driving the ${model}`;
//     return dri;
//   }
// }
// const car1=new car("Ford","Raptor",2024,"Black");
// console.log(car1.model);
// console.log(car1.drive());

// class Car{
//   constructor(make,model,year,color,price){
//     this.make=make;
//     this.model=model;
//     this.year=year;
//     this.color=color;
//     this.price=price;
//   }
//   display(){
//     const prop=(`Make : ${this.make}\nModel : ${this.model}\nYear : ${this.year}\nColor : ${this.color}\nPrice : $${this.price.toFixed(2)}`);
//     return prop;
//   }
//   calTotal(saleTax){
//     const total=`Tax : ${(saleTax*100).toFixed(2)}%\nTotal : ${(Number(this.price)+(saleTax * Number(this.price)))}`;
//     return total;
//   }
// }
// const saleTax=0.1;
// const Car1 =new Car("toyota","Raptor",2024,"Black",50000,);
// console.log(`${Car1.display()}\n${Car1.calTotal(saleTax)}`);

// class Animmal{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }
//   move(speed){
//     const mov=(`The ${this.name} move at a speed of ${speed.toFixed(2)} Km/h.`);
//     return mov;
//   }
// }
// class Cow extends Animmal{
//   constructor(name,age,runSpeed){
//     super(name,age);
//     this.runSpeed=runSpeed;
//   }
//   run(){
//     const rn=(`The ${this.name} is Running .\n${super.move(this.runSpeed)}`);
//     return rn;
//   }
// }
// class Fish extends Animmal{
//   constructor(name,age,swimSpeed){
//     super(name,age);
//     this.swimSpeed=swimSpeed;
//   }
//   swim(speed){
//     const sw=(`The ${this.name} is swiming .\n${super.move(this.swimSpeed)}`);
//     return sw;
//   }
// }

// class Hawk extends Animmal{
//   constructor(name,age,flySpeed){
//     super(name,age)
//     this.flySpeed=flySpeed;
//   }
//   fly(){
//     const fy=`The ${this.name} is Flying .\n${super.move(this.flySpeed)}`
//     return fy;
//   }
// }
// const cow=new Cow("Cow",3,40);
// const fish=new Fish("Fish",2,20);
// const hawk=new Hawk("Hawk",4,50);
// console.log(cow.run());

// console.log(fish.swim());
// console.log(hawk.fly());

// console.log(cow.name);
// console.log(cow.age);
// console.log(cow.runSpeed);
// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimSpeed);
// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);

// class Ractangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error(`Width must be a positive number .`);
//     }
//   }
//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error(`Height must be a positive number .`);
//     }
//   }
//   get width() {
//     return this._width.toFixed(2);
//   }

//   get height() {
//     return this._height.toFixed(2);
//   }
//   get area() {
//     // const cal = _width * _height;
//     // return cal;
//     return this._width * this._height;
//   }
// }
// const rectangle = new Ractangle(10, 20);
// console.log(`Width : ${rectangle.width}\nHeight : ${rectangle.height}\nArea : ${rectangle.area.toFixed(2)} m`);

// class  Person{
//   constructor(firstName,lastName,age){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age=age;
//   }
//   set firstName(newfisrtName){
//     if(typeof newfisrtName==="string" && newfisrtName.length>0){
//       return this._firstName=newfisrtName;
//     }else{
//       console.error(`First name must be a non-empty stirng.`)
//     }
//   }
//   set lastName(newlastName){
//     if(typeof newlastName==="string" && newlastName.length>0){
//       return this._lastName=newlastName;
//     }else{
//       console.error(`Last name must be a non-empty stirng.`)
//     }
//   }
//   set age(newAge){
//     if(typeof newAge === "number" && newAge >=0){
//         return this._age=newAge;
//     }else{
//       console.error(`Age must be a non-negative number.`)
//     }
//   }
//   get firstName(){
//     return this._firstName;
//   }
//   get lastName(){
//     return this._lastName;
//   }
//   get age(){
//     return this._age;
//   }
// }
// const person=new Person("Phat","Bormey",30);
// console.log(`Full Name : ${person.firstName+" "+person.lastName}\nAge : ${person.age} years old. `);

//const colors=["red","green","blue","black","White"];
// [colors[0],colors[colors.length-1]]=[colors[colors.length-1],colors[0]];
// console.log(colors)
// const [firstColor,secondColor,thirdColor,...extraColor]=colors;
// console.log(firstColor,secondColor,thirdColor,extraColor)

// const person1={
//   name:"Bormey",
//   sex: "Male",
//   age:23,
//   country:"Cambodia",
//   sayHello(){
//     const say=`Hello my name is ${this.name}.\nI'm ${this.age} years old.\nI'm from ${this.country}.`;
//     return say;
//   }
// }
// const person2={
//   name:"Ranny",
//   sex: "Female",
//   age:21,
//   sayHello(){
//     const say=`Hello my name is ${this.name}.\nI'm ${this.age} years old.\nI'm from ${this.country}.`;
//     return say;
//   }
// }
// function displayPerson({name,sex,age,country="Unemployed"}){
//   console.log(`Name : ${name}\nSex : ${sex}\nAge : ${age}\nCountry : ${country}`);
// }
// displayPerson(person2);

// const person={
//   name:"Ranny",
//   sex: "Female",
//   age:21,
//   isStudent:true,
//   hobbies:["Read book","Play football","Cooking"],
//   address:{
//     vilage:"Koh Kou",
//     commue:"Prey  KorKi",
//     district:"Chantrea",
//     province:"Svay Rieng",
//     country:"Cambodia"
//   },
//   sayHello(){
//     const say=`Hello my name is ${this.name}.\nI'm ${this.age} years old.\nI'm from ${this.country}.`;
//     return say;
//   }
// }
// console.log()
// class Person{
//   constructor(name,age,...address){
//     this.name=name;
//     this.age=age;
//     this.address=new Address(...address);
//   }
// }

// class  Address{
//   constructor(street,city,country){
//     this.street=street;
//     this.city=city;
//     this.country=country;
//   }
// }
// const person1=new Person("Bormey","23","St63","Phnom Penh","Cambodia");
// console.log(person1.address.street)

// const fruits=[
//               {name:"Apple",color:"Green",calories:95},
//               {name:"Banana",color:"Yellow",calories:90},
//               {name:"Orange",color:"Orange",calories:98},
//             ];
// for(let i=0;i<fruits.length;i++){
//   console.log(fruits[i].name+"\t"+fruits[i].color+"\t"+fruits[i].calories)
// }

// fruits.forEach(fruit => console.log(fruit.name))

// const fruitName=fruits.map(fruitName=>fruitName.name);
// const fruitColor=fruits.filter(friut=>friut.color==="Yellow");
// console.log(fruitColor);
// console.log(fruitName);

// const maxCal=fruits.reduce((max,fruit)=>fruit.calories>max.calories ? fruit:max);
// const minCal=fruits.reduce((min,fruit)=>fruit.calories<min.calories ? fruit:min);
// console.log(maxCal);
// console.log(minCal);

// let numbers=[1,10,2,4,3,6,5,8,7,9];
// numbers.sort((a,b)=>a-b);
// console.log(numbers)

// const peoples=[
//                 {name:"Bormey",age:23,gpa:3.0},
//                 {name:"Ranny",age:21,gpa:3.1},
//                 {name:"Phanna",age:24,gpa:2.9},
//                 {name:"Puthi",age:22,gpa:2.9}
//               ];
// peoples.sort((a,b)=>b.age-a.age);
// console.log(peoples);

// const cards=['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
// shuffle(cards);
// console.log(cards);
// function shuffle(arr){
//   for(let i=arr.length-1;i>0;i--){
//     const random=Math.floor(Math.random()*(i+1));
//     [arr[i],arr[random]]=[arr[random],arr[i]];
//   }
// }

// const date = new Date();
// date.setFullYear(2024);
// date.setMonth(11);
// date.setDate(4);
// console.log(date.getFullYear(),
//             date.getMonth(),
//             date.getDate());

// function outer(){
//   let message="hello";
//   function inner(){
//     console.log(message);
//   }
//   inner();
// }
// outer();
//

// function scoreTotal() {
//   let score = 0;
//   function increasedScore(piont) {
//     score += piont;
//     console.log(`+${piont.toFixed(2)} pts`);
//   }
//   function decreasedScore(piont) {
//     score -= piont;
//     console.log(`-${piont.toFixed(2)} pts`);
//   }
//   function getScore() {
//     return score.toFixed(2);
//   }
//   return {increasedScore,decreasedScore,getScore};
// }
// const total=new scoreTotal();
// total.increasedScore(10);
// total.decreasedScore(4);
// console.log(`The final score is ${total.getScore()} pts`);

// const timeoutId=setTimeout(()=>console.log('Hello world'),3000); 
// clearTimeout(timeoutId);  

// function setTimer(){
//     let date=new Date();
//     function getHour(){
//       return date.getHours();
//     }
//     function getMinute(){
//       return date.getMinutes();
//     }
//     function getSecond(){
//       return date.getSeconds();
//     }
//       return {getHour,getMinute,getSecond};
//   }
//   const time=new setTimer();
//   console.log(time.getHour());
  
//   console.log()

// export const PI= 3.14159;
// export function getCircumference(radius){
//   return 2*PI*radius;
// }
//  export function getArea(radius){
//   return PI*radius*radius;
// }
// export function getVolume(radius){
//   return 4*PI*radius*radius;
// }
// function fun1(callback){

//   setTimeout(()=>{console.log(`Task 1`);
//                   callback()
//                   },3000);
// }
// function fun2(){
  
//   console.log("Task 2"); 
//   console.log("Task 3");
//   console.log("Task 4");

// }
// fun1(fun2); 
//  try{
//      console.log(x);
//  }catch(error){
//     console.error("error");
//  }finally{
//     console.log("This alway execute.")
// };
// console.log("You have reached the end!.");

// try{
//     const a=Number(window.prompt("Enter A : "));
//     const  b=Number(window.prompt("Enter B : "));
//     if(b==0){
//         throw new Error("You can't devid with 0.")
//     }
//     if(isNaN(a) || isNaN(b)){
//         throw new Error("A and B is only number.")
//     }
//     const c=a/b;
//     console.log(c.toFixed(2));
// }catch(error){
//     console.error(error);
// }

// const ulElement=document.querySelectorAll("ul");
// ulElement.forEach(ulElement=>{
//     const firstChild=ulElement.firstElementChild;
//     firstChild.style.color="yellow";
//     const lastChild=ulElement.lastElementChild;
//     lastChild.style.color="yellow";
// });
const fruit=document.querySelector("#fruits");
const child=fruit.children;
for(let i=0;i<child.length;i+=2){
    child[i].style.color="yellow";
}

