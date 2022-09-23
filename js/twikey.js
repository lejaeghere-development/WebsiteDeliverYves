

function getLogin() {
  const iban = document.getElementById("iban").value;
  const email = document.getElementById("email").value;
  const lastname = document.getElementById("lastname").value;
  const firstname = document.getElementById("firstname").value;
  const vatno = document.getElementById("vatno").value;
  const companyName = document.getElementById("companyName").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const zip = document.getElementById("zip").value;
  const url = "https://twikey-deliveryves.herokuapp.com";


  var requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch(`${url}/api/twikey/login`, requestOptions)

    .then(function(response) {
      const data = response.json();
      return data;
    })
    .then(function(data) {
      console.log(data.Authorization);
      const apiToken = data.Authorization;
      let parsedata = {
        iban,
        email,
        lastname,
        vatno,
        companyName,
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

      console.log(parsedata);
      fetch(`${url}/api/twikey/nieuweklant`, requestOptions)
      
        .then(response => response.json())
        .then(result => (console.log(result)))
        .then(result => (window.location.href  = result))
        .catch(error => console.log("error", error));
    })
    .catch(error => console.log("error", error));
};