/**
 * Created by CoreyDavis on 3/19/15.
 * MDV 2330
 * Conditionals_worksheet
 */

//Add alert to test my file
//alert("JavaScript is functional!");

//variables
//var temp=80;  //Hot enough example, is it hot enough to go to the beach
//var weight=145;  //Stuff your face example, an entrant qualifies based on weight
/*var degrees=Number(prompt("Please enter the temperature."));  //Prompt for temp in degrees
var unit=prompt("Enter the unit to convert to.","F or C");  //Prompt for unit of temp to convert
var fahrenheit;
var celsius;*/
var grade=Number(prompt("Please enter your % grade for this course.",95));  //Variable prompt for grade,defaulted 95%
var letterGrade;  //Variable declaration, Store conversion of % to letter grade

//Conditionals
/*if(temp <75){  //If less than 75 degrees
    console.log("We will go to the beach! ");
}else{  //If greater than 75 or equal
    console.log("We will go to the movies.");
}*/
/*if(weight <250){  //If less than 250 pounds
    console.log("The competitor needs to gain some weight!");
}else{  //If greater than or equal to 250 pounds
    console.log("The competitor qualifies for the heavyweight division.")
}*/
/*if(unit=="F"){  //Conversion to Fahrenheit when 'F' entered
    fahrenheit=degrees*1.8+32;
    console.log("The temperature is "+fahrenheit+" degrees Fahrenheit.");  //Output of Fahrenheit temp
}else if(unit=="C"){  //Conversion to Celsius when 'C' entered
    celsius=(degrees-32)*.5556;
    console.log("The temperature is "+celsius+" degrees Celsius.");  //Output of Celsius temp
}*/
if(grade>=95&&grade<=100){  //Grade range for A+ letter grade
    letterGrade="A+"
}else if(grade>=90&&grade<=94){ //Grade range for A letter grade
    letterGrade="A"
}else if(grade>=85&&grade<=89){  //Grade range for B+ letter grade
    letterGrade="B+"
}else if(grade>=80&&grade<=84){  //Grade range for B letter grade
    letterGrade="B"
}else if(grade>=76&&grade<=79){  //Grade range for C+ letter grade
    letterGrade="C+"
}else if(grade>=73&&grade<=75){  //Grade range for C letter grade
    letterGrade="C"
}else if(grade>=70&&grade<=72){  //Grade range for D letter grade
    letterGrade="D"
}else if(grade>=0&&grade<=69){  //Grade range for F letter grade
    letterGrade="F"
}
//prompts


//outputs
console.log("You have a "+grade+"%, which means you have earned a "+letterGrade+" in the class!");