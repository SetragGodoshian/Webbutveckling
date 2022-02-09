function menuToggle() {
    var x = document.getElementById("links");
    if (x.style.display === "flex") {
      hideMenu();
    } else {
      showMenu();
    }
  }
  function showMenu() {
    var y = document.getElementById("topNav");
    var x = document.getElementById("links");
  
    x.style.display = "flex";
    y.style.backgroundColor = "#111111";
    x.style.border = "1px solid #222222";
    menuHidden = false;
  }
  function hideMenu() {
    var y = document.getElementById("topNav");
    var x = document.getElementById("links");
  
    x.style.display = "none";
    y.style.backgroundColor = "transparent";
    x.style.border = "hidden";
    menuHidden = true;
  }
  window.onresize = resize;
  var menuHidden = false;



  
  function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }