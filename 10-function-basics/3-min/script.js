min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

// Ecrivez une fonction min(a, b) qui renvoie le plus petit des deux nombres a et b.

function min(a, b){
      return (a<b) ? console.log(a) :
            (a>b) ? console.log(b) :
            console.log(a);
}