function registrar() {

  const data = {
    firstName: "teste",
    lastName: "teste",
    cpf: "teste",
    email: "teste",
    isActive: true,
    userName: "teste",
    password: "teste"
  };

  fetch('https://localhost:7002/User/Register', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}