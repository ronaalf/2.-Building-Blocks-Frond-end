'use strict'
////////////Select The Weather////////////////
const select = document.querySelector('select');
const para = document.getElementById('resultWeather');

select.addEventListener('change',setWeather);

function setWeather(){
  const choice = select.value;
  para.style.visibility = 'visible';

  // if(choice === 'sunny'){
  //   para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  // }else if(choice === 'rainy'){
  //   para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  // }else if(choice === 'snowing'){
  //   para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  // }else if(choice === 'overcast'){
  //   para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  // }else{
  //   para.textContent = '';
  // }
  switch (choice){
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}

////////////////SOME PRACTICE////////////////
let cheese = 'Cheddar'; 
//*using a variable.
if(cheese){
  console.log(' Cheese available for making cheese on toast.');
}else{
  console.log('No cheese on toast for you today.');
}

let choice = 'sunny';
let temperature = 89;
const nesting = document.getElementById('nestingIf...else');
//*Nesting if...else
// if(choice === 'sunny'){
//   if(temperature < 86){
//     nesting.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
//   }else if (temperature >= 86){
//     nesting.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';
//   }
// }
if (choice === 'sunny' && temperature < 86){
  nesting.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
}else if (choice === 'sunny' && temperature >= 86) {
  nesting.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';
}
//////////////////Not Logical Operator/////////////////
let Monday = 'coffee';
let Tuesday = 'coffee';
const notOperator = document.getElementById('notLogicalOperator');

if(!(Monday || Tuesday == 'coffee')){
  notOperator.textContent = 'You should propably take other kind of drink';
}else{
  notOperator.textContent = 'You are in the mood for coffee, go and take as much as you want. :D';
}
//////////////////////////////////////////
let Wednesday = 'tea';
let Thursday = 12;
let Friday = 13;
let Saturday = 'OrangeJuice';
let Sunday = 'PineappleJuice';
if((Wednesday === 'tea' || Thursday < 11 || Friday >= 13) && (Saturday || Sunday === 'OrangeJuice')){
  console.log('You must not like cocacola!');
}
if (Friday === 13 || Friday === 12 || Friday === 11 || Friday === 10){
  console.log('It is Friday');
}
///////////////////// Switch Statements///////////////////
switch (Wednesday){
  case 'OrangeJuice':
    console.log ('It will be a really funny day');
    break

  case 'PineappleJuice':
    console.log('It will be a really relaxed & wonderful day');
    break
  
  case 'tea':
    console.log('Good one!');
    break
  
  case 'cocacola':
    console.log('Such as bad kid!');
    break

  case 'water':
    console.log('good for you and your body!');
    break;

  default:
    console.log('You shouldn\'t let your fears take control of yourself! ' +Wednesday+ ' was the appropriate result.');

}
console.log('Is there anything else you\'d like?');

////////////////
let phrase = 1;
let output = 'output: ';
switch(phrase){
  case 0:
    output += 'So ';
  case 1:
    output += 'what';
    output += '\'s ';
  case 2:
    output += 'your ';
  case 3:
    output += 'name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break
  default:
    console.log('Please pick a number from 0 to 5!');
}
///////////////////////
const action = 'say_hello';
switch (action){
  case 'say_hello': {
    let message = 'hello';
    console.log(message);
    break;
  }
  case 'say_hi': {
    let message = 'hi';
    console.log(message);
    break;
  }
  default:
    console.log('Empty action received.');
    break;
}
//////////////// Ternary Operator//////////////
let age = 25;
let beverage = (age >= 18) ? 'Beer' : 'Juice';
console.log(beverage);

// *Black and white ternary operator
const theme = document.getElementById('theme');
const changeColor = document.getElementById('changeColor-container');
changeColor.style.padding = '20px';
changeColor.style.backgroundColor = 'royalblue';

function update(bgColor, textColor){
  changeColor.style.backgroundColor = bgColor;
  changeColor.style.color = textColor;
}

theme.onchange = function(){
(theme.value === 'black') ? update('black','white') : update('white','black');

//to add more colors:
// const choice = theme.value;
// switch(choice){
//   case 'black':
//     update('black','white');
//     break;
//   case 'white':
//     update('white','black');
//     break;
//   case 'green':
//     update('green','purple');
//     break;
// }
}

/////////////////////Loops////////////////////////
const cats = ['Bill','Pete','Biggles','Misfit','James','Kitty'];
let info = 'My cats have been called ';

// for (let i = 0; i < cats.length; i++){
//   info += cats[i] + ', ';
// }

//*Deleting the comma on the end of the sentence
 for(let g = 0; g < cats.length; g++){
   if(g === cats.length -1){
     info += 'and, ' + cats[g] + '.';
   }else{
     info += cats[g] + ', ';
   }
 }
 console.log(info);
///////////////loops with break//look for a telephone number*
const contacts = ['James:2232344','Sarah:2434352','Bill:7654322','Mary:9998769','Dianne:9384975'];
const paraa = document.getElementById('numberResultt');
const inputa = document.getElementById('search');
const bttn = document.getElementById('btn');

bttn.addEventListener('click',function(){
  let searchName = inputa.value.toLowerCase();
  inputa.value = '';
  inputa.focus();
  for( let i = 0; i<contacts.length; i++){
    let splitContact = contacts[i].split(':');
    if(splitContact[0].toLowerCase() === searchName){
      paraa.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      break;
    }else{
      paraa.textContent = 'Contact not found.';
    }
  }
});
//////////////loops with continue//the square root of...
const inputSquare = document.getElementById('textSquare');
const btnSquare = document.getElementById('btnSquare');
const paraSquare = document.getElementById('SquareResult');

btnSquare.addEventListener('click',function(){
  let num = inputSquare.value;

  for(let i = 1; i <= num; i++){
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot){
      continue;
    }
    paraSquare.textContent += i + ' ';
  }
});

////////////////////While and do...while
const weeds = ['rosemany','cilantro','mint','peppermint','pot'];
let infom = 'Some weeds I know are: ';

// let i = 0;
// while(i < weeds.length){
//   if(i === weeds.length - 1){
//     infom += 'and, ' + weeds[i] + '.';
//   }else{
//     infom += weeds[i] + ', ';
//   }
//   i++;
//   console.log(infom); 
// }

///////////// do... while with the same example as the weeds
let i = 0;
do{
  if(i === weeds.length -1){
    infom += 'and, ' + weeds[i] + '.';
  }else{
    infom += weeds[i] + ', ';
  }
  i++
}while(i < weeds.length);
console.log(infom);
 
//////////////////My Own Function////////////////////////
const btn = document.getElementById('btnMyFunction');
btn.onclick = function(){
  displayMessage('Your inbox is almost full — delete some mails', 'warning');
 // displayMessage('Brian: Hi there, how are you today?','chat');
};

function displayMessage(msgText, msgType){
  const container = document.getElementById('MyOwnFunction-container');

  const panel = document.createElement('div');
  panel.setAttribute('class','msgBox');
  container.appendChild(panel);

  const msg = document.createElement('p');
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'x';
  panel.appendChild(closeBtn);

  closeBtn.onclick = function(){
    panel.parentNode.removeChild(panel);
  }
  
  if(msgType === 'warning'){
    msg.style.backgroundImage = 'url(images/warning.png)';
    panel.style.backgroundColor = 'red';
  }else if (msgType === 'chat'){
    msg.style.backgroundImage = 'url(images/chat.png)';
    panel.style.backgroundColor = 'aqua';
  }else{
    msg.style.paddingLeft = '20px';
  }
}
displayMessage();

////////////////// Function Library example////////////////
const input =document.querySelector('.numberInput');
const parag = document.querySelector('.libraryResult');

function squared(num){
  return num * num;
}

function cubed(num){
  return num * num * num;
}

function factorial(num) {
  if(num < 0) return undefined;
  if(num == 0) return 1;
  let x = num - 1;
  while(x > 1) {
    num *= x;
    x--;
  }
  return num;
}

input.onchange = function(){
  const num = input.value;
  if(isNaN(num)){
    parag.textContent = 'You need to enter a number!';
  }else{
    parag.textContent = num + ' squared is ' + squared(num) + '. ' +
                        num + ' cub is ' + cubed(num) + '. '+
                        num + ' factorial is ' + factorial(num) + '. ';
  }
}

////////////////// random Changing Color///////////////////////
//const btnn = document.getElementsByName('tt');
const btnn = document.getElementById('cCB');
const theDiv = document.getElementById('changingColor-container');
function random(number){
  return Math.floor(Math.random()*number);
}
function bgChange(){
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  theDiv.style.backgroundColor = rndCol;
  console.log();
}

//btnn.onclick = bgChange;
// btnn.onfocus = bgChange; 
// btnn.onblur = bgChange;
//btnn.ondblclick = bgChange;
//window.onkeypress = bgChange;
//window.onkeydown = bgChange;
//btnn.onmouseover = bgChange;
//btnn.onmouseout = bgChange;
//*****Another way is the below one but in the cause of calling more buttons.
// for (let i = 0; i < btnn.length; i++){
//   btnn[i].onclick = bgChange;
// }
//*****The other way is:
// btnn.forEach(function(btnn){
//   btnn.onclick = bgChange;
// });
//*****Ways event mechanism DOM do it.
//btnn.addEventListener('click',bgChange);  
//*****Other way to do the function is:
// btnn.addEventListener('click',function(){
//   let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   theDiv.style.backgroundColor = rndCol;
// });
//*****To remove a handler the next should be convenient
//btnn.removeEventListener('click',bgChange);

// function bgChange(e){
//   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   e.target.style.backgroundColor = rndCol;
// }
btnn.addEventListener('click',bgChange);

///////////////// Event target example/colorfullbox//////////////
const myDivContainer = document.getElementById('colorfullBox-container');

for(let i = 1; i <= 16; i++){
  const mydivs = document.createElement('div');
  mydivs.setAttribute('class','colorDivs');
  mydivs.setAttribute('name','colorsdivs');
  myDivContainer.appendChild(mydivs);
}

function randomm(number){
  return Math.floor(Math.random()*number);
}

function bgChangee(){
  const rndCol = 'rgb(' + randomm(255) + ',' + randomm(255) + ',' + randomm(255) + ')';
  return rndCol;
}

const divs = document.getElementsByName('colorsdivs');

for(let i = 0; i < divs.length; i++){
  divs[i].onclick = function(e){
    e.target.style.backgroundColor = bgChangee();
  }
}

//////////////////////////submit form preventDefault()//////////////////////////////
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const prgrgh = document.getElementById('prgrgh');

form.onsubmit = function(e){
  if(fname.value === ''|| lname.value ===  ''){
    e.preventDefault();
    prgrgh.textContent = 'You need to fill in both names!';
  }
}

///////////////Show video box example bubbling and capture////////////////
const battn = document.getElementById('battn');
const videoBox = document.getElementById('diiv');
const video = document.querySelector('video');

battn.onclick = function(){
  videoBox.setAttribute('class','showing');
}

videoBox.onclick = function(){
  videoBox.setAttribute('class','hidden');
}

video.onclick = function(){
    video.play();
}

///////////////////////////Out of MDN and mind xD///////////////////////////////

let parameterVariable = '10 days of JavaScript.';

function greeting(parameterVariable){ 

  console.log('Hello, world');
  console.log(parameterVariable);
}
greeting(parameterVariable);