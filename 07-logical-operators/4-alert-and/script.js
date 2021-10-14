alert( alert(1) && alert(2) );// tout comme pour le or on a alert(1) qui retourne undefined mais s'effectue dans un premier temps
                              // comme alert(1)est undefined alors l'alert principal passe a undefined donc false
                              // on affiche l'alert(1) puis on affiche undefined et on ne tient pas compte de l'alert(2)