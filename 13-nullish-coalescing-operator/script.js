let banane;

alert(banane ?? "pomme");

// banane est undefined donc on affiche pomme

let banane = "Trop bon";

alert(banane ?? "pomme");

// cette fois banane est bien définie donc on affiche sa valeur "Trop bon"

let pomme = null;
let poire = "Trop bon !";
let banane = null;


alert(pomme || poire || banane || "pas bon.");

// le premier non null ou non undefined est poire donc on affiche "Trop bon !"

// Ce que retourne, par définition, l'opérateur "||" ?  renvoie la première valeur vraie
// Ce que retourne, par définition, l'opérateur "??" ?  renvoie la première valeur définie

// || a pour valeur 6 de priorité et ?? a pour valeur 5 donc || est prioritaire sur ??

// ?? ne peut-être utilisé avec && et || sans parenthèses sinon Javascript l'interdit 

let fruit = "poire" && "pomme" ?? "banane" // cela donne une syntax error car pas de parenthèses



let fruit = ("poire" && "pomme") ?? "banane"// d'abord le && qui donne "pomme" puis "pomme" ??§ "banane" qui donne "pomme"

alert(fruit)// on affiche "pomme"