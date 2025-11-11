
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsaufruf | call
// test();

// Funktionsrumpf | (callee)
// Funktionsdeklaration
function test()
{
    console.log("Hallo, Kevin!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Call
// ausgabeNamen();

// Funktion
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS ...
    let firstName = "Kevin";
    console.log("Hallo, " + firstName + "!");
}

// console.log(firstName); // Fehler : scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamen2("Kevin"); // Argument --> Daten für Parameter
// ausgabeNamen2("Klaus");
// ausgabeNamen2("Ibrahim");

function ausgabeNamen2(firstName) {  // Parameter
    console.log("Hallo, " + firstName + "!");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNamen3("Max","Mütze");
// ausgabeNamen3("Maxine","Mützerich");

// Argumente werden von prompt() geliefert --> Input
// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamen3(prompt("Vorname: "),prompt("Name: "));


function ausgabeNamen3(firstName, familyName) {  // Parameter
    console.log("Hallo, " + firstName + " " + familyName + "!");
}


/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Verantwortlichkeiten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenSRP("Max","Mütze");

function ausgabeNamenSRP(firstName, familyName) {  

    //1st responsibility: string composing
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!"

    //2nd responsibility: string output
    console.log(outputStr);

}

/***** Funktionen 03b *****/
// 03b Verantwortlichkeiten in getrennte Funktionen auslagern

//1st responsibility: string composing
output(getString("Max","Mütze"));
output(getString("Maxine","Mützerich"));
const prompt = require('prompt-sync')({sigint: true});
output(getString(prompt("Vorname?: "),prompt("Name?: ")));

function getString(firstName, familyName) {
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!";
    return outputStr;  // Fkt.- OUTPUT sendet Daten zum call
}

//2nd responsibility: string output
// output("hi");
// output(2);
// output(true);

function output(outputData) { // Wrapper
    console.log(outputData);
}

