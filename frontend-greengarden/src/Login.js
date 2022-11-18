import axios from "axios";
import React, { Fragment, useState } from "react";

function Login() {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    const handleNameChange = (value) => {
        setName(value);
    }
    const handleCpfChange = (value) => {
        setCpf(value);
    }

    const handleLogin = (value) => {
        const data = {
            Name : name,
            Cpf : cpf,
            IsActive : 1
        };

        const url = 'https://localhost:44386/api/Login/Login';
        axios.post(url, data).then((result) => {
            alert(result.data);
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
    return (
        <Fragment>
     <br></br>
            <div>LOGIN</div>
            <label>Name</label>
            <input type="text" id="name" placeholder="Digite seu nome" onChange={(e) => handleNameChange(e.target.value)}></input>
            <label>CPF</label>
            <input type="text" id="cpf" placeholder="Digite seu CPF" onChange={(e) => handleCpfChange(e.target.value)}></input>
            <button onClick={() => handleLogin()}>Entrar</button>
        </Fragment>
    )
}

export default Login;