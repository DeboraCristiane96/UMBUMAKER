import React from 'react';
//import { InputText } from 'primereact/inputtext';
//import { Button } from 'primereact/button';
//import { AutoComplete } from 'primereact/autocomplete';
import axios from 'axios';
import FormGroup from '../../components/FormGroup';



export default class AssociateCreate extends React.Component {

  
    state = {
        email:"",
        senha:"",
        nome:"",
        telefone:"",
        qrcode:"",
        typeAssociate:'',
        ativo:Boolean,
        linkWhatsapp:"",
        result: ''
      }
    
      create = async () => {
        await axios.post(`http://localhost:8080/contasacesso`,
          {
            email: this.state.email,
            senha: this.state.senha,
            nome: this.state.nome,
            telefone: this.state.telefone,
            qrcode: this.state.qrcode,
            typeAssociate:this.state.typeAssociate,
            ativo: this.state.ativo,
            linkWhatsapp: this.state.linkWhatsapp,
          }
        ).then(response => {
          console.log(response);
        }
        ).catch(error => {
          console.log(error.response);
        }
        );
      }
    
      show = () => {
        var result = this.state.nomeBordado;
        console.log(this.state.nomeBordado)
        this.setState({ result });
      }
      render() {
        return (
          <div>
            <header className="App-header">
              <fieldset className="fieldset-sched">
                <FormGroup 
                label="Nome">
                  <input
                    type="text"
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup
                  label="Email">
                  <input
                    type="email"
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup
                  label="Senha">
                  <input
                    type="password"
                    onChange={(e) => {
                      this.setState({ finishTime: e.target.value });
                    }}
                  />
                </FormGroup>
                <br />
                <br />
                <FormGroup
                  label="Telefone">
                    <input
                    type="password"
                    onChange={(e) => {
                      this.setState({ finishTime: e.target.value });
                    }}
                  />
                  
                </FormGroup>
                <br />
                <br />
                <FormGroup
                  label="Link do whatsapp">
                    <input
                    type="password"
                    onChange={(e) => {
                      this.setState({ linkWhatsapp: e.target.value });
                    }}
                  />
                  
                </FormGroup>
                <br />
                <br />
            <br />
                <button
                    onClick={this.post}
                    type="button"
                  >
                    SALVAR
                  </button>
                  <button
                    onClick={this.cancel}
                    type="button"
                  >
                    CANCELAR
                  </button>
              </fieldset>
            </header>
            <footer className="foot"></footer>
          </div>
        );
      }
    }
    