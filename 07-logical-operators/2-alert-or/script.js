alert( alert(1) || 2 || alert(3) );// alert(1) retourne undefined (false dans le or) 
                                   //mais l'affichage s'effectue et on passe au prochain qui est la valeur 2
                                   //on affiche alors 2 et on sort de l'alert car elle pass à true
                                   //on affiche donc une première alert avec 1 puis une seconde avec 2