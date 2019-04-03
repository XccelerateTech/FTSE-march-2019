function genericPoemMaker(name, gender){
    console.log(name + " is finer than fine wine.");
    console.log("Alturistic and noble for the modern time");
    console.log("Always admirably anorned with the latest style");
    console.log("A " + gender +  " of unfortunate tradegies who still manages a perpetual smile");
}


const greetUser = (customerName, sex) => { //The order of the input is what is important
    var salutation  = sex && sex === "Man" ? "Mr." : "Mrs";
    console.log("Hello, " + salutation + " " + customerName);
}



const getUserInput = (firstName, lastName, gender, callback) => { 
    var fullName=  firstName + " " + lastName;

    if(typeof callback === "function" ){
        callback(fullName, gender) //order that 
    }
}





getUserInput('Michael', 'Fassbender', "Man", genericPoemMaker);



getUserInput('Bill', 'Gates', "Man", greetUser)

getUserInput('Bill', 'Gates', "Man", function(a,b){
    console.log(`${a} gives all his money to his genders: ${b} charity `);

})