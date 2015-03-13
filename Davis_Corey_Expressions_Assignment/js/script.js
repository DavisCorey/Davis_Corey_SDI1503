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
//var bonsaiArea =  bonsaiTree * 2; //  Assignment operator to calculate bonsai tree area sq. ft.
//var cherryArea =  cherryBlossom * 4; // Assignment operator to calculate cherry blossom area sq. ft.
//var roseArea =  roseBush * 6; //Assignment operator to calculate rose bushes sq. ft.
var totalArea = bonsaiTree *2 + cherryBlossom *4 + roseBush *6; //Calculation of total are required

var totalTrees = Number(bonsaiTree) + Number(cherryBlossom) + Number(roseBush);  //Calculation of total trees entered.

//var totalArea = bonsaiArea + cherryArea + roseArea;  //Calculation of total area used
//var treeType = [bonsaiTree, cherryBlossom, roseBush];  //Variable declaration and assignment of array values
//var totalTrees = treeType[0] + treeType[1] + treeType[2]; //Total number of trees
console.log(totalArea);
console.log(totalTrees);