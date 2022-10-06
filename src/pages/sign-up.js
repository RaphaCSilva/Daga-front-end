import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

    const [data, setdata] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const URL = "http://localhost:5000/sign-up"
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
    
        axios
          .post(URL, data)
          .then((response) => {
            console.log(response.data);
            navigate("/sign-in");
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
            <input
                type="password"
                placeholder="Confirme a senha"
                required
                value={data.confirmaPassword}
                onChange={(e) => setdata({ ...data, confirmPassword: e.target.value })}
            />

            <button onClick={signUp}>cadastrar</button>
            <Link to={"/sign-in"}>
                <button>
                    Já tenho uma conta, quero fazer login
                </button>
            </Link>
        </>
    );
}