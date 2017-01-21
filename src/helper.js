var fb = function(number){
for(var i = 1; i < number; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("by 5 and 3" + " " + "out of number " + number + " " + i)
  }else if (i % 3 === 0){
    console.log("Fizz")
  }else if (i % 5 === 0){
    console.log("Buzz")
  }else {
    console.log(i)
  }
}
}
