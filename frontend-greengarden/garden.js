function getGardenName() {

  const urlParams = new URLSearchParams(window.location.search);
  const gardenName = urlParams.get("gardenName") // livros

  return gardenName;
}

function getGardenData(name) {
  // let name = document.getElementById('name').value;
  const gardemName = localStorage.gardenName;
   console.log(gardemName)

  fetch('https://localhost:7002/Garden/'.concat(localStorage.userId).concat('/v2'))
    .then(function (serverPromise) {
      serverPromise.json()
        .then(function (result) {
          console.log('result', result);
          document.getElementById('gardenName').innerHTML = `${result.name}`;
          document.getElementById('gardenPageTitle').innerHTML = `${result.name}`;
          document.getElementById('gardenNameMobile').innerHTML = `${result.name}`;
          document.getElementById('gardenPhone').innerHTML = `${result.phone}`;
          document.getElementById('footerPhone').innerHTML = `${result.phone}`;
          document.getElementById('gardenDescription').innerHTML = `${result.description}`;
          document.getElementById('objective').innerHTML = `${result.objective}`;
          document.getElementById('adress').innerHTML = `${result.adress}`;
          // document.getElementById('banner').innerHTML = `${result.bannerURL}`.outerHTML;
          document.getElementById("banner").src=`${result.bannerURL}`;
          document.getElementById("imageCenter").src=`${result.imageURL}`;
          document.getElementById("logoImage").src=`${result.logoURL}`;


        })
        .catch(function (error) {
          console.log(error);
        });
    })
    .catch(function (error) {
      console.log(error);
    });

}

// ao carregar a pagina GARDEN
(function () {

  getGardenData();


})();