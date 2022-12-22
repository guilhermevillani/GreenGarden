

function postLogin(url, body) {
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
      //window.location.href = "Dash.html";
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
      alert('Registro realizado com sucesso!');
      localStorage.gardenName = body.name;
      localStorage.gardemId = body.id;
      history.go(); //recarrega pagina para mostrar campos de edição
    })
    .catch((error) => {
      // alert('Erro encontrado!');
      console.error('Error:', error);
    });

}

//// - GET VALUES OF IMAGES
let bannerBase64;
const banner = document.querySelector("#banner")
banner.addEventListener("change", function () {

  const reader = new FileReader()

  reader.readAsDataURL(this.files[0])

  reader.onload = function () {
    bannerBase64 = reader.result;
  }
})

let imageObjective;
const objective = document.querySelector("#objective")
objective.addEventListener("change", function () {

  const reader = new FileReader()

  reader.readAsDataURL(this.files[0])

  reader.onload = function () {
    imageObjective = reader.result;
  }
})

let logoImage
const logo = document.querySelector("#logoImage")
logo.addEventListener("change", function () {

  const reader = new FileReader()

  reader.readAsDataURL(this.files[0])

  reader.onload = function () {
    logoImage = reader.result;
  }
})

function registerGarden() {
  event.preventDefault()

  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let phone = document.getElementById('phone').value;
  let objective = document.getElementById('objective').value;
  let adress = document.getElementById('adress').value;

  // "BannerURL": bannerBase64,
  body = {
    "Name": name,
    "Description": description,
    "Phone": phone,
    "Objective": objective,
    "adress": adress,
    "BannerURL": bannerBase64,
    "imageURL": imageObjective,
    "logoURL": logoImage,
    "userId": localStorage.userId,
  }

  postRegisterGarden(body)
}

////---INI::Buscar dados horta e preencher página---////

function openGarden() {
  event.preventDefault();

  let name = document.getElementById('name').value;
  var url = window.location.origin.concat('/garden.html').concat('?gardenName=' + localStorage.gardenName)
  window.location.href = url;

}

function getGardenData(name) {
  event.preventDefault()
  // let name = document.getElementById('name').value;

  fetch('https://localhost:7002/Garden/Garden/'.concat(name))
    .then(function (serverPromise) {
      serverPromise.json()
        .then(function (result) {
          return result.json();
        })
        .catch(function (error) {
          console.log(error);
        });
    })
    .catch(function (error) {
      console.log(error);
    });

}

////---INI::UPDATE GARDEN---////

let testBanner;
const updateTestBanner = document.querySelector("#updateBanner")
updateTestBanner.addEventListener("change", function () {

  const reader = new FileReader()

  reader.readAsDataURL(this.files[0])

  reader.onload = function () {
    testBanner = reader.result;
  }
})

let updateImage
const updateObjectiveImage = document.querySelector("#updateImage")
updateObjectiveImage.addEventListener("change", function () {

  const reader = new FileReader()

  reader.readAsDataURL(this.files[0])

  reader.onload = function () {
    updateImage = reader.result;
  }
})

let logoUpdateImage
const logoUpdate = document.querySelector("#updateLogoImage")
logoUpdate.addEventListener("change", function () {

  const reader = new FileReader()

  reader.readAsDataURL(this.files[0])

  reader.onload = function () {
    logoUpdateImage = reader.result;
  }
})




function updateGarden() {
  event.preventDefault()

  let name = document.getElementById('updateName').value;
  let description = document.getElementById('updateDescription').value;
  let phone = document.getElementById('updatePhone').value;
  let objective = document.getElementById('updateObjective').value;
  let adress = document.getElementById('updateAdress').value;




  // "BannerURL": bannerBase64,
  body = {
    "id": localStorage.gardemId,
    "name": name,
    "description": description,
    "phone": phone,
    "objective": objective,
    "adress": adress,
    "BannerURL": testBanner,
    "imageURL": updateImage,
    "LogoURL": logoUpdateImage,
    "products": [
      {

      }
    ],
    "userId": localStorage.userId,
    "user": null
  }

  console.log('body', body)

  fetch('https://localhost:7002/Garden/'.concat(localStorage.gardemName), {
    method: 'PUT', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((body) => {
      alert('Registro realizado com sucesso!');
      console.log('Success:', body);
      localStorage.gardenName = body.name;
      localStorage.gardemId = body.id;

      document.getElementById("create").style.display = "none";
      document.getElementById("update").style.display = "block";


      history.go(); //recarrega pagina para mostrar campos de edição
    })
    .catch((error) => {
      // alert('Erro encontrado!');
      console.error('Error:', error);
    });

}

var product;
const productImg = document.querySelector("#lalala")
productImg.addEventListener("change", function () {

  const reader = new FileReader()

  reader.readAsDataURL(this.files[0])

  reader.onload = function () {
    product = reader.result;
  }
})

function registerProduct() {
  event.preventDefault()

  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let quantity = document.getElementById('quantity').value;

  body = {
    "id": 0,
    "name": name,
    "description": description,
    "imageURL": product,
    "quantity": quantity,
    "expiratioDate": "2022-12-21T03:58:10.493Z"
  }


  fetch('https://localhost:7002/Garden/'.concat(localStorage.userId).concat('/v2'))
    .then(function (serverPromise) {
      serverPromise.json()
        .then(function (result) {

          fetch('https://localhost:7002/Garden/'.concat(result.name).concat('/Products'), {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          })
            .then((response) => response.json())
            .then((body) => {
              alert('Registro realizado com sucesso!');

            })
            .catch((error) => {
              console.error('Error:', error);
            });
        })
        .catch(function (error) {
          console.log('Horta não encontrada');

        });
    })
    .catch(function (error) {
      console.log(error);
    });

}






