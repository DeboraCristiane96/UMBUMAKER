import React from "react";
import "./UpdatePlace.css";
import "bootswatch/dist/minty/bootstrap.css";
import FormGroup from "../../../componentes/FormGroup";
//import { Button } from 'primereact/button';
import {
  showSuccessMessage,
  showErrorMessage,
} from "../../../componentes/Toastr";
import AssociateApiService from "../../service/AssociateApiService";

export default class UpdatePlace extends React.Component {
  state = {
    id: 0,
    email:"",
    senha:"",
    nome:"",
    telefone:"",
    qrcode:"",
    typeAssociate:'',
    ativo:false,
    linkWhatsapp:"",

  };

  constructor() {
    super();
    this.service = new AssociateApiService();
  }

  findById = (associateId) => {
    this.service
      .find(associateId)
      .then((response) => {
        const associate = response.data;
        const id = associate.id;
        const name = associate.name;
        const email = associate.reference;
        const password = associate.password;
        const telefone = associate.telefone;
        const linkWhatsapp = associate.linkWhatsapp;

        this.setState({
          id,
          name,
          email,
          password,
          telefone,
          linkWhatsapp,
        });
        console.log(associate);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  componentDidMount() {
    const params = this.props.match.params;
    const id = params.id;
    this.findById(id);
  }

  validate = () => {
    const errors = [];

    if (!this.state.placeName) {
      errors.push("É obrigatório informar o nome!");
    }

    if (!this.state.email) {
      errors.push("É obrigatório informar um local de referência!");
    }

    if (!this.state.capacityMax) {
      errors.push("É obrigatório informar a capacidade máxima do local!");
    }

    return errors;
  };

  put = () => {
    const errors = this.validate();

    if (errors.length > 0) {
      errors.forEach((message, index) => {
        showErrorMessage(message);
      });
      return false;
    }

    this.service
      .update(this.state.id, {
        name: this.state.placeName,
        reference: this.state.placeReference,
        maximumCapacityParticipants: this.state.capacityMax,
        public: this.state.isPublic,
        responsibles: this.state.responsibles,
      })
      .then((response) => {
        showSuccessMessage("Local atualizado com sucesso!");
        console.log(response);
        this.props.history.push("/listPlaces");
      })
      .catch((error) => {
        showErrorMessage(error.response.data);
        console.log(error.response);
      });
  };

  handleChange = () => {
    this.setState({
      isPublic: !this.state.isPublic,
    });
  };

  cancel = () => {
    this.props.history.push("/listPlaces");
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="title">Atualizar local</h1>
          <fieldset className="field-upPlace">
            <FormGroup label="Nome" htmlFor="lab">
              <input
                className="form-control"
                type="text"
                id="lab"
                value={this.state.placeName}
                onChange={(e) => {
                  this.setState({ placeName: e.target.value });
                }}
              />
            </FormGroup>
            <FormGroup label="Referência" htmlFor="lab">
              <input
                className="form-control"
                type="text"
                id="lab"
                value={this.state.placeReference}
                autoComplete="off"
                onChange={(e) => {
                  this.setState({ placeReference: e.target.value });
                }}
              />
            </FormGroup>

            <FormGroup
              className="capacity-upd"
              label="Capacidade total de pessoas"
              htmlFor="lab03"
            >
              <input
                className="form-control-small"
                type="number"
                id="lab"
                min={1}
                max={250}
                autoComplete="off"
                onChange={(e) => {
                  this.setState({ capacityMax: e.target.value });
                }}
              />
            </FormGroup>

            <FormGroup
              className="isPublic-upd"
              label="É público?"
              htmlFor="lab"
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                defaultChecked={this.state.isPublic}
                onChange={this.handleChange}
              />
            </FormGroup>
            <br />
            <br />
            <button
              onClick={this.put}
              type="button"

            >
              Atualizar
            </button>
            <button
              onClick={this.cancel}
              type="button"
              className="btn btn-danger btn-upPlace"
            >
              Cancelar
            </button>
          </fieldset>
        </header>
        <footer className="footer-upPlace"></footer>
      </div>
    );
  }
}
