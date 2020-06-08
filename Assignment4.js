//1. Find the square of a given number and print it on the console
var num = 4
function findSquare(num) {
    console.log(num * num);
}
findSquare(num);

//2. Look at the time of the day and tell whether it's time for breakfast, lunch or
//dinner and print it on the console
//06hrs-12hrs breakfast
//12hrs-16hrs lunch
//16hrs-20hrs dinner
//outside this - sleep time
let hour = 11;
if (hour >= 6 && hour < 12) 
  console.log('It Breakfast time');
else if (hour >= 12 && hour < 1) 
  console.log('It lunch time');
else if (hour >= 16 && hour < 20) 
  console.log('It dinner time');
else 
  console.log('It sleep time');

 
//3. Given a number, find whether the number is odd or even and print on the console. 
var num = 8;
document.write("Number = "+num+"<br>");
if(num % 2 == 0) {
  document.write('Number is even!');
  
} else {
  document.write('Number is odd!');
}
//4.  In your full name, find the number of vowel letters and consonant letters and print on the console
var name = "Fuhad MIah";
var vcount = 0;
var ccount = 0;

for (var i = 0; i < name.length; i++) {
  console.log(name[i]);
  if (name[i] == "a" || name[i] == "e" || name[i] == "i"  || name[i] == "o" || name[i] == "u") {
    vcount += 1
  } else {
    ccount += 1
  }
}
console.log("Vowels", vcount);
console.log("Consonant", ccount);





//5.Take a number and print the first 10 multiples of that number eg. Let's take number 2, 
//first 10 multiples would be -> 2,4,6,8,10,12,14,16,18,20
var num = 2;
for(var i = 1; i <= 10 i++) {
  console.log( num + "*" + i + "=" + i * num)
}
