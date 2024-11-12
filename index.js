//Temperature Convversions
const txt = document.querySelector("#txt");
const rdCF = document.querySelector("#rdCF");
const rdFC = document.querySelector("#rdFC");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
let temp;

result.textContent = "Select unit.";

rdCF.onclick = function () {
  result.textContent = "You are selected Celsius to Fahrenheit .";
};
rdFC.onclick = function () {
  result.textContent = "You are selected Fahrenheit to Celsius .";
};

btn.onclick = function () {
  if (rdCF.checked) {
    CelsiusToFahrenheit(txt);
  } else if (rdFC.checked) {
    FahrenheitToCelsius(txt);
  }
};

function CelsiusToFahrenheit(txt) {
  temp = Number(txt.value);
  result.textContent = ((temp * 9) / 5 + 32).toFixed(1) + " °F";
}
function FahrenheitToCelsius(txt) {
  temp = Number(txt.value);
  result.textContent = (((temp - 32) * 5) / 9).toFixed(1) + " °C";
}

//Dice Roller
function DiceRoller() {
  const txtDR = document.querySelector("#txtDR").value;
  const btnDR = document.querySelector("#btnDR");
  const diceResult = document.querySelector("#diceResult");
  const diceImages = document.querySelector("#diceImages");
  const values = [];
  const images = [];
  for (let i = 0; i < txtDR; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="./images/Dice-${value}.png">`);
  }
  diceResult.textContent = `Dice: ${values.join(",")}`;
  diceImages.innerHTML = images.join("");
  let result = values.reduce(function (ac, cr) {
    return ac + cr;
  }, 0);
  const sumResult = document.querySelector("#sumDiceResult");
  sumResult.textContent = result;
}

//Auto Generator Password
function GeneratorPassword() {
  const btnGPass = document.querySelector("#btnGPass");
  const txtGPass = document.querySelector("#txtGPass");
  const length = document.querySelector("#txtGPassLength").value;
  const includeLowercase = true;
  const includeUpercase = true;
  const includeNumber = true;
  const includeSymbol = true;
  function GeneratePass(
    length,
    includeLowercase,
    includeUpercase,
    includeNumber,
    includeSymbol
  ) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "@$#%&()!?/{}*+-";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowerCaseChars : "";
    allowedChars += includeUpercase ? upperCaseChars : "";
    allowedChars += includeNumber ? numberChars : "";
    allowedChars += includeSymbol ? symbolChars : "";

    if (length <= 0) {
      return `(Password length must be at least 1.)`;
    }
    if (allowedChars.length === 0) {
      return `(At least one set of charater need to be selected.)`;
    }
    for (let i = 0; i < length; i++) {
      const indexRandom = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[indexRandom];
    }
    return password;
  }
  const password = GeneratePass(
    length,
    includeLowercase,
    includeUpercase,
    includeNumber,
    includeSymbol
  );
  txtGPass.textContent = password;
}

function setTimer() {
  const now = new Date();
  let hours = now.getHours();
  const meridium = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const second = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${second}  ${meridium}`;
  const clock = document.querySelector("#clock");
  clock.textContent = timeString;
}
setTimer();
setInterval(setTimer, 1000);

function stopwatch() {
  const display=document.querySelector("#stopw");
  let timer=null;
  let startTime=0;
  let elapsedtime=0;
  let isRunning = false;
  function start() {
    if(!isRunning){
      startTime=Date.now()- elapsedtime;
      timer=setInterval(update,10);
      isRunning=true;
    }
  }
  function stop(){
    if(isRunning){
      clearInterval(timer);
      timer=Date.now()- startTime;
      isRunning=false;
    }
  }
  function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedtime=0;
    isRunning = false;
    display.textContent=`00:00:00:00`
  
  }
  function update(){
    const currentTime=Date.now();
    elapsedtime=currentTime - startTime;

    let hours =Math.floor( elapsedtime / (1000 * 60 * 60));
    let minutes=Math.floor(elapsedtime / (1000 * 60) %60);
    let seconds=Math.floor(elapsedtime / 1000 % 60);
    let millisecond=Math.floor(elapsedtime % 1000/10);

    display.textContent=`${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}:${millisecond.toString().padStart(2,0)}`;
  }
  return {start,stop,reset};
}
const stw=new stopwatch();

const calcResult=document.querySelector("#calcResult");

function appendToDisplay(input){
    calcResult.value+=input;
}
function clearDisplay(){
  calcResult.value="";
}
function calculate(){
  try{
  calcResult.value=eval(calcResult.value);
  }
  catch(Error){
    calcResult.value="Error";
  }
}

// 
// import {PI,getCircumference,getArea,getVolume} from './test.js';
// console.log(PI.toFixed(2),getCircumference(100).toFixed(2),getArea(100).toFixed(2),getVolume(100).toFixed(2));




// let a ="Hello";
// for(let i=1;i<=10;i++){
//     console.log(i,a);
// }

// let logIn=false;
// let username;
// let password;
// do{
//     username=prompt("Username");
//     password=prompt("Password");
//     if(username === "a" && password === "a"){
//         logIn=true;
//         alert("Login is success .");
//     }else{
//         alert("try again .")
//     }
// }while(!logIn);

// while(!logIn){
//    username= window.prompt("Enter your username ");
//    password= window.prompt("Enter password");
//     if(username === "b" && password === "b"){
//         logIn=true;
//         alert("Login is success .");
//     }else{
//         alert("Invalid .");
//     }
// }

// const isSunny=false;
// if(!isSunny){
//     console.log("it's Sunny");
// }else{
//     console.log("it's Cloudy")
// }

// const heading=document.querySelector("#heading");
// const btn=document.querySelector("#btn");

// btn.onclick=function(){
//     const hsd=heading.style;
//     if(hsd.display==="none"){
//        hsd.display="inline-block";
//     }else{
//         hsd.display="none";
//     }

// };

// const element = document.querySelector("#btn");
// element.style.cssText =
//   "width: 100px;height: 60px; background-color: red;border: none;border-radius: 5px;font-size: 2rem;color: white;";

// const names=["Phat","Bormey"];
// const fullName=names.reduce(function(ac,cr){
//     return ac+` ${cr}`;
// },);
// console.log(fullName)

// const salary=[200,300,250,400];
// const total=salary.reduce(function (ac,cr){
//     return ac+cr;
// },0)
// console.log(total);
// let total=0;
// for(i=0;i<salary.length;i++){
//     total+=salary[i];
// }
// console.log(total);

// const names=["Bormey","Ranny","Sok","Tola"];

// const allName=names.join("\t");
// console.log(allName);

// function eachItem(item,index){
//     console.log(index+1,item);
// }
// names.forEach(eachItem);

//  names.forEach(function(item,index){
//     console.log(index+1,item)
//  })

// const student=[
//     {
//         name:"Bormey",
//         score:100
//     },
//     {
//         name:"Puthi",
//         score:80
//     },
//     {
//         name:"Chanthat",
//         score:90
//     }
// ]
// let i=0;
// while(i<student.length){
//     console.log("Student : "+student[i].name+" has "+student[i].score+" Scores .");
//     i++;

// }

// const name=["NISAN","BMW","TOYOTA","MAZDA","BUCATI"];
// for(let i=name.length;i>=0;i--){
//    console.log(name[i]);
// }

// const car={
//     model:"Nisan",
//     name:["GTR R32","GTR R35"],
//     qty:(x,y)=>x+y,
//     stop:()=>"Stop",
// }
// console.log("Model : "+car.name[0]+"\nQuatity : "+car.qty(2,3)+"\n"+car.stop());
