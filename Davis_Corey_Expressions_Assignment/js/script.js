/**
 *  Corey Davis
 *  Expressions Assignment
 *  3/12/15
 */
var bonsaiTree;  //Variable Declaration
var cherryBlossom;  //Variable Declaration
var roseBush;  //Variable Declaration

//Prompt for number of bonsai trees
bonsaiTree = prompt("Calculation of area needed for new garden. \nPlease enter the number of Bonsia trees wanted");
//Prompt for number of cherry blossom trees
cherryBlossom = prompt("Please enter the number of Cherry Blossom trees wanted.");
//Prompt for number of rose bushes
roseBush = prompt("Please enter the number of Rose Bushes wanted.");

//Calculation of User input
//Assignment operator to calculate rose bushes sq. ft.
var totalArea = bonsaiTree *2 + cherryBlossom *4 + roseBush *6; //Calculation of total are required
var totalTrees = Number(bonsaiTree) + Number(cherryBlossom) + Number(roseBush);  //Calculation of total trees entered.

//Display totals in Console
console.log(totalArea);
console.log(totalTrees);

//Display calculated total area and total plants
alert("The landscape will need "+ totalArea +" square feet to plant those " + totalTrees + " trees.");
