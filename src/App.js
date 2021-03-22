import React from "react";
import "./App.css";
import imagenVenus from "./assets/images/venus.jpg";
import imagenAdan from "./assets/images/creacion-adan.jpg";
import imagenDali from "./assets/images/persistencia-memoria.png";

function App() {
  const data = [
    {
      title: "El nacimiento de Venus",
      description: "Cuadro de La bodega Marina",
      category: "Histórico",
      image: imagenVenus,
      autor: "Sandro Botticelli",
    },
    {
      title: "La creación de Adán",
      description: "Parte de la capilla sixtina",
      category: "Arte religioso",
      image: imagenAdan,
      autor: "Miguel Ángel",
    },
    {
      title: "La persistencia de la memoria",
      description: "Obra de Salvador Dalí",
      category: "Moderno",
      image: imagenDali,
      autor: "Salvador Dalí",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        {data.map((item, i) => {
          return <ArtCard {...item} key={item.title + i} />;
        })}
      </div>
    </div>
  );
}

function ArtCard(props) {
  return (
    <div className="card">
      <img className="card_image" src={props.image} alt="" />
      <div className="card_info">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h6>{props.category}</h6>
        <small>Autor: {props.autor}</small>
      </div>
    </div>
  );
}

export default App;
