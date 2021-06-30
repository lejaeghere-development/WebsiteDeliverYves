

function getLogin() {
  //const errorMessage = document.getElementById("errorMessage");
  //const errorDiv = document.getElementById("errorDiv");
  const iban = document.getElementById("iban").value;
  const email = document.getElementById("email").value;
  const lastname = document.getElementById("lastname").value;
  const firstname = document.getElementById("firstname").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const zip = document.getElementById("zip").value;
  const url = "https://twikey-deliveryves.herokuapp.com";
  // if (!lastname) {
  //   errorDiv.style.display = "block";
  //   errorMessage.innerHTML = "Vul uw naam correct in";
  // }

  var requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch(`${url}/api/twikey/login`, requestOptions)
    .then(function(response) {
      const data = response.json();
      console.log(data);
      return data;
    })
    .then(function(data) {
      const apiToken = data.Authorization;
      let parsedata = {
        iban,
        email,
        lastname,
        phone,
        address,
        firstname,
        city,
        zip,
        apiToken
      };

      var requestOptions = {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(parsedata)
      };

      fetch(`${url}/api/twikey/nieuweklant`, requestOptions)
        .then(response => response.json())
        .then(result => (window.location.href = result)) // (window.location.href = result))
        .catch(error => console.log("error", error));
    })
    .catch(error => console.log("error", error));
  
};

