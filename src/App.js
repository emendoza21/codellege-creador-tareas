import React from "react";
import "./App.css";
import imagenEstrellada from "./assets/images/noche_estrellada.jpg";
import imagenOla from "./assets/images/ola.jpg";
import imagenGrito from "./assets/images/grito.jpg";
import imagenJuicio from "./assets/images/juicio.jpg";
import imagenAvigno from "./assets/images/avigno.jpg";
import imagenLisa from "./assets/images/lisaa.jpg";

function App() {
  const data = [
    {
      title: "La noche estrellada",
      description: "Una de las obras más famosas",
      category: "Histórico",
      image: imagenEstrellada,
      autor: "VINCENT VAN GOGH",
    },
    {
      title: "La Ola",
      description: "figuras de la escuela Ukiyo-e",
      category: "Arte Abstracto",
      image: imagenOla,
      autor: "KATSUSHIKA HOKUSAI",
    },
    {
      title: "El Grito",
      description: "pintura más reconocibles",
      category: "Moderno",
      image: imagenGrito,
      autor: "EDVARD MUNCH",
    },
    {
      title: "El Juicio Final",
      description: "fresco en la Capilla Sixtina",
      category: "Arte Religioso",
      image: imagenJuicio,
      autor: "MIGUEL ANGEL",
    },
    {
      title: "Las Señoritas de Avigno",
      description: "inició el cubismo",
      category: "Arte moderno",
      image: imagenAvigno,
      autor: "PABLO PICASSO",
    },
    {
      title: "Mona Lisa ",
      description: "óleo sobre tabla",
      category: "Historico",
      image: imagenLisa,
      autor: "LEONARDO DA VINCI",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <Form />
        <Obras />
        {data.map((item, i) => {
          return <ArtCard {...item} key={item.title + i} />;
        })}
      </div>
    </div>
  );
}

// Form email
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      para: "",
      asunto: "",
      mensaje: "",
    };
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("mensaje enviado");
    console.log(this.state);
  };
  render() {
    return (
      <form className="form">
        <div className="mensaje">Mensaje</div>
        <div>
          <input
            name="para"
            placeholder="Para: "
            type="email"
            value={this.state.para}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            name="asunto"
            placeholder="Asunto: "
            type="text"
            value={this.state.asunto}
            onChange={this.handleChange}
          />
        </div>
        {/* <div>
          <label for="category">Categoría</label>
          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option value=""></option>
            <option value="Histórico">Histórico</option>
            <option value="Moderno">Moderno</option>
            <option value="Arte abstracto">Arte abstracto</option>
            <option value="Religioso">Religioso</option>
          </select>
        </div> */}
        <div>
          <textarea
            name="mensaje"
            value={this.state.mensaje}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <input
          className="submit"
          type="submit"
          value="Enviar"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}
// Form email

//Form Obras
class Obras extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      category: "",
      image: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="form_obras">
        <div>
          <label for="title">Título de la obra de arte</label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label for="description">Descripción</label>
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label for="category">Categoría</label>
          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option value=""></option>
            <option value="Histórico">Histórico</option>
            <option value="Moderno">Moderno</option>
            <option value="Arte abstracto">Arte abstracto</option>
            <option value="Religioso">Religioso</option>
          </select>
        </div>
        <div>
          <label for="image">URL de la imagen</label>
          <input
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
        </div>
        <input className="submit" type="submit" value="Guardar obra de arte" />
      </form>
    );
  }
}

// Tarjeta
function ArtCard(props) {
  return (
    <div className="card">
      <img className="card_image" src={props.image} alt="" />
      <div className="card_info">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h6>{props.category}</h6>
        <h5>De: {props.autor}</h5>
      </div>
      <Button />
    </div>
  );
}
// Tarjeta
// Boton
class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0,
    };
  }

  handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <button className="likes_button" onClick={this.handleClick}>
        {this.state.clicks} likes
      </button>
    );
  }
}
// Boton

export default App;
