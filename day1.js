console.log("Hello world");

//I m creating a variable of type string,-world,character,sentence,"",''
var name = "Lew Lit Wah"
console.log(name);
var city = "johor"
console.log(city);
var quote = "I'm handsome"
console.log(quote);
var message = 'He says "lucky dog"'
console.log(message);
//uperation
//you can use + to combine 2 strings (concatenation)
var greeting = "hello"+name;
console.log(greeting);

//2)Number
var a =10;
var b =3;
//-operation(+,-,*,/.%)
var sum =a + b;
console.log(sum);
var minus = a - b;
console.log(minus);
var product = a * b;
console.log(product);
var division = a / b;
console.log(division);
var module = a % b;
console.log(module);

//3)Boolean
var isHungry = false
console.log(isHungry);

// control flow 
// if eles

if(isHungry == true){
  console.log("Let' s dinner!");
}
else {
  console.log("Let's eat after class");
}

var age = 23;

if(age < 18){
  console.log("you cannot watch the movie");
}

var age = 23;

if (age < 18){
  console,log("You cannot waych the movie");
}
else if(age < 18)
  {
    console.log("you can watch this with parents");
  }
else{
  console.log("you can enter the cinema");
}

if(age < 13){
  console.log("you cannot watch the movie");
}
else if (age < 18)
  {
    console.log("you can watch this with parents");
  }
else {
  console.log("you are free to watch the movie")
}

var userage = 16;
var fullprice = 110;

if (userage < 19){
  console.log("The full price is RM "+fullprice*0.5);
}
else if (userage < 41){
  console.log("The full price is RM "+fullprice);
}
else if (userage < 66){
  console.log("The full price is RM "+fullprice * 0.75);
}
else {
  console.log("The full price is RM "+fullprice * 0.5);
}

var number = 2312312312;
if (number % 2 == 0){
  console.log("The number is even");
}
else {
  console.log("The number is odd");
}

var number = 35;

if (number % 2 == 0){
  console.log(number+"is an even number");
}
else{
  console.log(number+"is an odd number");
}

//control flow - for loop
//. from 0 ; until 10 ; every iteration add by 1

for (var i = 0; i < 10; i++) {
  console.log(i);
}
// from 1 ; until 10; every iteration add by 2 
for (var i = 0; i < 10; i+=2) {
  console.log(i);
}

var lines = 13;
var multiplier = 4;

for (var i = 1; i < lines; i ++){
  console.log(i+" x "+multiplier+" = "+i*multiplier);
}



