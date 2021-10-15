/* Un nombre entier supérieur à 1 est appelé un Nombre premier s'il ne peut être divisé sans reste par rien d'autre que 1 et lui-même.

En d’autres termes, n > 1 est un nombre premier s’il ne peut être divisé de manière égale par autre chose que 1 et n.

Par exemple, 5 est un nombre premier, car il ne peut pas être divisé sans reste par 2, 3 et 4.

Écrivez un code qui produit les nombres premiers dans l’intervall e 2 à n.

Pour n = 10, le résultat sera 2,3,5,7.*/

let nbrePremier = +prompt("entrez un nombre :");
let tabPremier = [];

for ( let i=2; i<=nbrePremier; i++){
      let count = 0;
      for (let j=2; j<=nbrePremier; j++){
            if (i%j==0){
                  count++;
            }
      }
      if ( count==1){
            tabPremier.push(i);
      }
}
alert(tabPremier);
