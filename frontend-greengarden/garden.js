function getGardenName() {

  const urlParams = new URLSearchParams(window.location.search);
  const gardenName = urlParams.get("gardenName") // livros

  return gardenName;
}

function getGardenData(name) {
  // let name = document.getElementById('name').value;
  const gardemName = getGardenName();

  fetch('https://localhost:7002/Garden/Garden/'.concat(gardemName))
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
          // document.getElementById('banner').innerHTML = `${result.bannerURL}`.outerHTML;
          document.getElementById("banner").src=`${result.bannerURL}`;

          var reader = new FileReader();
          reader.onload = function () {
            var output = document.getElementById('output_image');
            output.src = reader.result;
          }
          reader.readAsDataURL(event.target.files[0]);

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