let numbers=[1,2,3,4,5,6,7,8,9];

for(let i=0;i<numbers.length;i++){
    let number=numbers[i]
    if(number===1){
        console.log(numbers[i]+"st");
    }
    else if(number===2){
        console.log(numbers[i]+"nd");
    }
    else if(number===3){
        console.log(numbers[i]+"rd");
    }else{
        console.log(numbers[i]+"th");
    }
}