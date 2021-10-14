function checkAge(age) {
      if (age > 18) {
        return true;
    *!*
      } else {
        // ...
        return confirm('Did parents allow you?');
      }
    */!*
    }
 
    // pas de différence avec la fonction suivante

    function checkAge(age) {
      if (age > 18) {
        return true;
      }
    *!*
      // ...
      return confirm('Did parents allow you?');
    */!*
    }
    