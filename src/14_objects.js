/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays - Prinzip: [[[]]]
// nested arrays  - hier: [[],[]]
// arr =   [
//             ["Ich","bin","Max"],
//             ["Ich","bin","Moritz"]
//         ];
      
// output(arr);
// output(arr[0]);
// output(arr[0][0]+ " " + arr[1][2]);
// output(arr[1][0]);
// output("------------");

// // nested loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);       
//     }
// }


/***** Objekte 1 Daten/Funktionen *******/

let person = {
                firstName:"Felix",
                familyName: "Wolf",
                salary:[120000, 160000],
                permission: true





            };

output(person);
output("---------------")

output(person.firstName);
output(person.familyName);

output("---------------")
output(person.salary[1]);
output(person.salary.length);
for (let i = 0; i < person.salary.length; i++) {
    output(person.salary[i]);
}

output("---------------")
output(person.permission);












// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}