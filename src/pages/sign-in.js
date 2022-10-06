import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {

    const [data, setdata] = useState({
        email: "",
        password: ""
    });

    const URL = "http://localhost:5000/sign-in"
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
    
        axios
          .post(URL, data)
          .then((response) => {
            console.log(response.data);
            navigate("/game");
          })
          .catch((erro) => {
            console.log({ message: "Erro no cadastro", erro });
          });
    };

    return (
        <>
            <input
                type="email"
                placeholder="E-mail"
                required
                value={data.email}
                onChange={(e) => setdata({ ...data, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Senha"
                required
                value={data.password}
                onChange={(e) => setdata({ ...data, password: e.target.value })}
            />

            <button onClick={signIn}>Login</button>
            <Link to={"/sign-up"}>
                <button>
                    Ainda não tenho uma conta, quero me cadastrar
                </button>
            </Link>
        </>
    );
}