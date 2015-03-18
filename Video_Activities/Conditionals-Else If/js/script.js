/**
 * Created by CoreyDavis on 3/18/15.
 * MDV 2330
 *
 */
//Conditional Logic - else if

//Add alert to test my file
//alert("JavaScript is functional!");

//variables
var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45;  //the height of the kid with the parent
//if the kid is over 48 inches in height additional code is executed.

//conditionals
if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present. ");
}else{
    //sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first! ");
}
//prompts


//outputs
