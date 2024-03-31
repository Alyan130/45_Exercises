// Person name
let personName="Alyan Ali";
// Different cases
console.log("In lowercase : "+personName.toLowerCase());
console.log("In uppercase : "+personName.toUpperCase());
console.log("In title case : "+personName.replace(/\bw/g,c =>c.toUpperCase()));
// This program prints the person name in lower ,upper and title case.