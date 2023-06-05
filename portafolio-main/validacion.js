function validateForm(event) {
    event.preventDefault();
    
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();
    
    if (name === "" || email === "" || message === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }
    
    if (!validateEmail(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }
    
    // Aquí puedes agregar el código para enviar el formulario si todos los campos son válidos
    // Por ejemplo, puedes usar AJAX para enviar los datos a un servidor
    
    // Resetear el formulario después de enviarlo correctamente
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
  
  function validateEmail(email) {
    // Utilizamos una expresión regular simple para validar el correo electrónico
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  