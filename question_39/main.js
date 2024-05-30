function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
var display1 = city_country("Karachi", "Pakistan");
var display2 = city_country("Melbourne", "Australia");
var display3 = city_country("Edgbaston", "England");
console.log(display1);
console.log(display2);
console.log(display3);
