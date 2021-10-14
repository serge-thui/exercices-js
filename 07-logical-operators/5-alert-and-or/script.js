alert( null || 2 && 3 || 4 );// la priorité des opérateurs && est supérieure au OR
                             // on fait 2 && 3 en premier
                             // && renvoie soit la première valeur fausse ou si tout est true la dernière valeur
                             // 2 && 3 donne 3
                             // on se retrouve avec alert( null || 3 || 4)
                             // la première valeur true est 3 (car nous sommes sur des OR)
                             // on affiche alors 3

