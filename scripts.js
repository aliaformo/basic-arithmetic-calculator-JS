

if (confirm("Hello! \nThis is a basic calculator that only performs 4 arithmetic operations ('+', '-', '*' and '/'), between only 2 numbers. \nWould you like to continue?") == true) {
    
    var firstNumber = parseFloat(prompt("Please enter first number:"));
    var operator = prompt("Please enter one operator ['+', '-', '*', '/']:"); 
    var secondNumber = parseFloat(prompt("Please enter second number:"));
    var result

    // Checking valid numbers
if ( (!isNaN(firstNumber) && !isNaN(secondNumber)) ){
    // Checking valid operators
    if (operator == '+' || operator == '-' || operator == '*' || operator == '/' ) {
        
        if (operator == '+') {
            result = firstNumber+secondNumber
                alert('This addition: ' + firstNumber + " + " + secondNumber + " = " + result + ". Thank you!");
    } else if (operator == '-') {
        result = firstNumber-secondNumber
            alert('This subtraction: ' + firstNumber + " - " + secondNumber + " = " + result + ". Thank you!");
}

else if (operator == '*') {
    result = firstNumber*secondNumber
        alert('This multiplication: ' + firstNumber + " * " + secondNumber + " = " + result + ". Thank you!");
}
    //Checking division by zero
else if ((operator == '/') && secondNumber != 0) {
    result = firstNumber/secondNumber
    alert('This division: ' + firstNumber + " / " + secondNumber + " = " + result + ". Thank you!");

} else {
    alert('Division by 0 is not allowed. Please refresh and enter a number different from zero as second number when dividing. Thank you');
}

    } else {
        alert("Operator should be '+', '-', '*', '/' or '*'. Please, refresh and enter a valid operator. Thank you");
    }
    
} else {
    alert("First and Second number should be number. Please refresh and enter a numbers in both fields. Thank you");
}

} else {
	alert('Thank you! See you next time :)');
}

		
