var personName = "Alyan Ali";
console.log("In lowercase : " + personName.toLowerCase());
console.log("In uppercase : " + personName.toUpperCase());
console.log("In title case : " + personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
