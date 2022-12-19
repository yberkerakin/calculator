const add = function(number1,number2) {
	return number1+number2
};

const subtract = function(number1,number2) {
  return number1-number2
	
};

const sum = function(array) {
  let totalNumber = 0
  for(const i of array){
    totalNumber = totalNumber + i
  }
	return totalNumber
};

const multiply = function(array) {
  let totalNumber = 1
  for(const i of array){
    totalNumber = totalNumber * i
  }
	return totalNumber

};

const divide = function(number1,number2){
    if (number2>number1){
        return number1/number2
    }else if(number1>number2 && number2!==0){
        return number1/number2
    }
}

const power = function(number1,number2) {
  let totalNumber = 1
  for(let i = 0 ; i<(number2); i++){
    totalNumber = totalNumber*number1
  }
  return totalNumber
	
};

const operate = function(operator,num1,num2){
    
}