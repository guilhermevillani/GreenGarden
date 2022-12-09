import axios from "axios";
import React, { Fragment, useState } from "react";

function Registration() {
    
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    const handleNameChange = (value) => {
        setName(value);
    }

    const handleCpfChange = (value) => {
        setCpf(value);
    }

    const handleSave = (value) => {
        const data = {
            Name : name,
            Cpf : cpf,
            IsActive : 1
        };

        const url = 'https://localhost:44386/api/Login/Registration';
        axios.post(url, data).then((result) => {
            alert(result.data);
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
    
    return(
        <Fragment>
            <br></br>
            <div> CADASTRO </div>
            <label>Name</label>
            <input type="text" id="name" placeholder="Digite seu nome" onChange={(e) => handleNameChange(e.target.value)}></input>
            <label>CPF</label>
            <input type="text" id="cpf" placeholder="Digite seu CPF" onChange={(e) => handleCpfChange(e.target.value)}></input>
            <button onClick={() => handleSave()}>Salvar</button>
        </Fragment>
    )
}

export default Registration;