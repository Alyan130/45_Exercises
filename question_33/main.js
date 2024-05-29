var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     let ordinal: string;
//     if (number === 1) {
//         ordinal = "st";
//     } else if (number === 2) {
//         ordinal = "nd";
//     } else if (number === 3) {
//         ordinal = "rd";
//     } else {
//         ordinal = "th";
//     }
//     console.log(`${number}${ordinal}`);
// }
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number === 1) {
        console.log(numbers[i] + "st");
    }
    else if (number === 2) {
        console.log(numbers[i] + "nd");
    }
    else if (number === 3) {
        console.log(numbers[i] + "rd");
    }
    else {
        console.log(numbers[i] + "th");
    }
}
