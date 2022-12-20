////---INI::Login usuário---////

function postLogin(url, body) {
  // console.log("Body=", body)
  // let request = new XMLHttpRequest()
  // request.open("POST", url, true)
  // request.setRequestHeader("Content-type", "application/json")
  // request.send(JSON.stringify(body))

  // request.onload = function () {
  //   console.log(JSON.parse(this.responseText))
  //   alert('Login realizado com sucesso');
  //   window.location.href = "Dash.html";
  // }

  // return request.responseText

  fetch('https://localhost:7002/User/Login', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((body) => {
      console.log('Success:', body);
      alert('Login realizado com sucesso');
      window.location.href = "Dash.html";
    })
    .catch((error) => {
      alert('Usuário ou senha incorretos!');
      console.error('Error:', "Usuário ou senha incorretos!");
    });

}

function login() {
  event.preventDefault()
  let url = "https://localhost:7002/User/Login"
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  body = {
    "Password": password,
    "Email": email
  }

  postLogin(url, body)
}

////---INI::Registrar usuário---////

function postRegister(body) {
  console.log(body)
  fetch('https://localhost:7002/User/Register', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((body) => {
      console.log('Success:', body);
      alert('Registro realizado com sucesso! Faça seu login para acessar o sistema.');
      window.location.href = "pages-login.html";
    })
    .catch((error) => {
      alert('Erro encontrado!');
      console.error('Error:', "Erro encontrado!");
    });

}

function register() {
  event.preventDefault()
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById("name").value;
  let cpf = document.getElementById("cpf").value;
  let lastName = document.getElementById("lastName").value;

  body = {
    "UserName": name.concat(lastName),
    "Cpf": cpf,
    "LastName": lastName,
    "FirstName": name,
    "Password": password,
    "Email": email
  }

  postRegister(body)
}

////---INI::Registrar Horta---////

function postRegisterGarden(body) {
  fetch('https://localhost:7002/Garden/Register', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((body) => {
      console.log('Success:', body);
      alert('Registro realizado com sucesso! Faça seu login para acessar o sistema.');
      // window.location.href = "pages-login.html";
    })
    .catch((error) => {
      // alert('Erro encontrado!');
      console.error('Error:', error);
    });

}

let bannerBase64;

const banner = document.querySelector("#banner")
banner.addEventListener("change", function() {

  const reader = new FileReader()
  
  reader.readAsDataURL(this.files[0])

  reader.onload = function(){
    bannerBase64 = reader.result;
  }
})

function registerGarden() {
  event.preventDefault()

  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let phone = document.getElementById('phone').value;
  let objective = document.getElementById('objective').value;
  // let address = document.getElementById('address').value;
  // let bannerURL = document.getElementById('bannerURL');
  // let imageURL = document.getElementById('imageURL');
  // let logoURL = document.getElementById('logoURL');



  // body = {
  //   "Name": name,
  //   "Description": description,
  //    "Phone": phone,
  //    "Objective": objective,
  //   // "Adress": address
  //   // "BannerURL": bannerURL,
  //   // "ImageURL": imageURL,
  //   // "LogoURL": logoURL

  // }
  body = {
    "Name": name,
    "Description": description,
    "Phone": phone,
    "Objective": objective,
    "BannerURL": bannerBase64,
    "adress": {

    },
    "products": [
      {

      }
    ],
    "admins": [
      {

      }
    ]
  }

  postRegisterGarden(body)
}

////---INI::Buscar dados horta e preencher página---////

function openGarden() {
  event.preventDefault();
  

  let name = document.getElementById('name').value;
  var url = window.location.origin.concat('/garden.html').concat('?gardenName=' + name)
  window.location.href = url;
  
}

function getGardenData(name) {
  event.preventDefault()
  // let name = document.getElementById('name').value;

  fetch('https://localhost:7002/Garden/Garden/'.concat(name))
    .then(function (serverPromise) {
      serverPromise.json()
        .then(function (result) {
          console.log('resulti', result);
        })
        .catch(function (error) {
          console.log(error);
        });
    })
    .catch(function (error) {
      console.log(error);
    });

}








