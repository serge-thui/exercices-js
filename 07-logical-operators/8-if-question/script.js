if (-1 || 0) alert( 'first' );// le -1 du OR est true donc s'exécute 
if (-1 && 0) alert( 'second' );// le 0 du && est false donc le if est false ne s'exécute pas
if (null || -1 && 1) alert( 'third' );// d'abord le && qui donne 1 puis le ou donne 1 donc true , s'exécute
