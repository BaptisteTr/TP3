var element = document.getElementById("command-button");
element.addEventListener("click", function() {
  alert("Commande validée");
});

var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (email) => { return regex.test(String(email).toLowerCase())};

$("#email").on("change", () => {
  if(validateEmail($("#email").val())) {
    email.style.backgroundColor = "green";
    } else {
      email.style.backgroundColor = "red";
    };
})

$("#soumettre").on("click", function() {
  var nom = $("#nom").val();
  var email = $("#email").val();
  var message = $("#message").val();


  const request = new Request("http://localhost:3000/formulaire", {
    method: "POST",
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({"nom": nom, "email": email, "message": message})
  });

  fetch(request)
  .then((response) => {
    if(response.status === 200) {
      console.log(response.json())
    } else {
      console.error(response);
    }
  }).catch(error => {
    console.log(error);
  })
})