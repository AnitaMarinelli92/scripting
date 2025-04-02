//variabili che possono cambiare
let x = "a";
let y = "b";
let z = "c",w = "d";

const PI = 3.14; //consanti non si cambiano es. il pgreco
x = "a1"; //si può cambiare la variabile iniziale e ridargli un altro valore



//operatore ternario è un if sulla stessa riga
x = (y === "b" ? y : z); 
// stessa cosa di sopra
if (y === "b") {
    x = y;
} else {
    x = z;
}
// di solito op.ternario si usa cosi con il null
x = (y != null ? y : "sconosciuto");

if (y != null) {
    x = y;
} else {
    x = "(sconosciuto)";
}


//stampare un comando
console.log("ciao mondo!");


//assegnare variabile nome: Anita e stampare ciao anita!
let nome = "Anita";
console.log("ciao " + nome + "!");
//oppure
/*let nome = "Anita";
let saluto = "ciao " + nome + "!";
console.log(saluto);*/



// esempio in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
//
const str1 = "Hello";
const str2 = "World";

//concat concatena
let saluto2 = "saluto2: ";
saluto2 = saluto2.concat(str1);
saluto2 = saluto2.concat(" ");   // "saluto2: Hello "
saluto2 = saluto2.concat(str2);  // "saluto2: Hello World"
console.log(saluto2);


let saluto3 = "saluto3: "
                .concat(str1)
                .concat(" ")   
                .concat(str2);

console.log(saluto3);


/*
//soluzione 1 per fare tutto maiuscolo
let saluto4 = "saluto4: ".toUpperCase()
              .concat(str1.toUpperCase())
              .concat(" ")
              .concat(str2.toUpperCase());

console.log(saluto4);
//soluzione 2
let saluto4 = "saluto4: "
              .concat(str1)
              .concat(" ")
              .concat(str2)
              .toUpperCase();

console.log(saluto4);

//soluzione 3
let saluto4 = saluto3.toUpperCase();
console.log(saluto4);*/


console.log(saluto3.toUpperCase());
//per cambiare il carattere di una stringa, in questo caso cambio il prefisso saluto3 in saluto4
console.log(
    saluto3
    .replace("saluto3:","saluto 4:")
    .toUpperCase()
    );


            