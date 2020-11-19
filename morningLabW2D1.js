//Morning Lab (11/19/20)
/* Conditionals

1. Write a JavaScript display the larger of two integers

2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F
3. Write a JavaScript program that displays 
"Good Morning" if time is between 5AM-11:59 | 
"Good Afternoon" if time is between 12 - 16 | 
otherwise "Hey there"
*/

//#1

let x;
let y;
x = 90;
y = 10;


if (x > y){
    console.log(x);
}
else {
    console.log(y);
}






//#2

let grade;

grade = 100;

if (grade >= 90){
    console.log('You got an A');
} else if(grade >= 80){
    console.log('You got a B')
} else if(grade >= 70){
    console.log('You got a C')
} else if(grade >= 55){
    console.log('You got a D')
}
else{
console.log('You Failed Dawg')
}


//#3 (Needed help from Google)

const today = new Date();

let time = today.getHours();

if (time >= 5 && time < 12){
    console.log("Good Morning");
} else if (time > 12 && time < 16){
    console.log("Good Afternoon");
}
else{
    console.log("Hey There");
}

