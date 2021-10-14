let user = prompt("Who's there");
if (user==''){
      alert("Canceled");
}else if (user!="Admin"){
      alert("I don't know you");
}else {
      let pass = prompt("Password")
      if ( pass == "TheMaster"){
            alert("Welcome!");
      }else if (pass!="TheMaster" && pass!=""){
            alert("Wrong password");
      }else{
            alert("Canceled")
      }
}