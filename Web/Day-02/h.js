function calculator  (operator, a, b) {
    switch(operator) {
      case '+': 
      return a + b;
  
      case '-':
      return a - b;
  
      case '*':
      return a * b ;
  
      case '/':
      return a / b;
  
      default:
      throw new Error('Incorrect Operator:' + operator + '!')
    }
  
  }
  
  calculator('+', 1, 2)

  //bonus 

  function area(height, width) {
    return height * width;  
}