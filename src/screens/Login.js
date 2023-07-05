
import React from "react";
import { Button } from 'primereact/button';

import './Login.css'

export default function Login() {

    return (
        <div className="container-login">
            <div className="left-login">
                
                <div className="imagem">
                    <img src="logo.png" alt="Logo-UMBUMAKER"/>

                </div>
            </div>
            <div className="hight-login">
                <div className="card-login">
                    <h2>Faça seu login...</h2>
                    <label>E-mail</label>
                    <input className="input" type="text" placeholder="e-mail" />
                    <label>Senha</label>
                    <input className="input" type="password" placeholder="senha" />
                    
                    <Button label="Login" />
                   
                </div>
            </div>
        </div>
        

    )
}
        
