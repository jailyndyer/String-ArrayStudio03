const input = require('readline-sync');
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet1 = food.split(",");
let sortCabinet1 = cabinet1.sort();
console.log(sortCabinet1);
let cabinet2 = equipment.split(",");
let sortCabinet2 = cabinet2.sort();
console.log(sortCabinet2);
let cabinet3 = pets.split(",");
let sortCabinet3 = cabinet3.sort();
console.log(sortCabinet3);
let cabinet4 = sleepAids.split(",");
let sortCabinet4 = cabinet4.sort();
console.log(sortCabinet4);

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinet1, cabinet2, cabinet3, cabinet4];
console.log(cargoHold);

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinetNumber = input.question("Enter the cabinet number (0 - 3): ");

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
console.log(`Cabinet #${cabinetNumber} contains ${cargoHold[cabinetNumber]}.\n`);

//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
cabinetNumber = input.question("Enter the cabinet number (0 - 3): ");
let item = input.question("Enter the item: ");

if (cargoHold[cabinetNumber].includes(item))
{
  console.log(`Cabinet ${cabinetNumber} DOES contain ${item}.`);
}
else
{
  console.log(`Cabinet ${cabinetNumber} DOES NOT contain ${item}.`);
}