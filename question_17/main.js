var peoples = ["Daniyal", "Mawia", "Zamad", "Areeb", "Murtuza"];
console.log("I am able to invite only two peoples for dinner");
peoples.push("Salman");
var p1 = peoples.pop();
var p2 = peoples.pop();
var p3 = peoples.pop();
var p4 = peoples.pop();
console.log("Hello ".concat(p1, ", Sorry can't invite you for dinner tonight"));
console.log("Hello ".concat(p2, ", Sorry can't invite you for dinner tonight"));
console.log("Hello ".concat(p3, ", Sorry can't invite you for dinner tonight"));
console.log("Hello ".concat(p4, ", Sorry can't invite you for dinner tonight"));
