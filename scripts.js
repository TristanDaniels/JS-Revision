for (let i = 0; i <= 20; i++) {
  console.log(i);
}

const marks = 96;

if (marks == 100) {
  console.log("A+");
} else if (marks < 100 && marks > 80) {
  console.log("A");
} else {
  console.log("Fail");
}

function greet(name, surname) {
  console.log("Hello " + name + " " + surname);
}

greet("Jason", "Wandrag");
greet("Lihle", "Goliath");

const num1 = 10;
const num2 = "10";

const stonks1 = "Jason";
const stonks2 = "jason";

console.log(stonks1.toLowerCase() === stonks2.toLowerCase());

Types of equality check
== / ===
!= / !==

let points = 110;

if (points >= 100) {
  console.log("gold member");
} else {
  console.log("silver member");
}

const member = points >= 100 ? "gold member" : "silver member";

console.log(member);

SWITCH-CASE
const marks = 97;

switch (true) {
  case 100:
    console.log("Teach me");
    break;
  case marks < 100 && marks > 90:
    console.log("So close");
    break;
  default:
    console.log("Try again");
}
