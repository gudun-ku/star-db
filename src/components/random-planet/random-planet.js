import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import "./random-planet.css";
import ErrorIndicator from "../error-indicator/indexj";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet() {
    //const id = Math.floor(Math.random() * 21 + 1);
    const id = 12;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;
    //console.log(planet);

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { url, name, population, rotation_period, diameter } = planet;
  var urlWOL = url.substr(0, url.lastIndexOf("/"));
  const imgId = urlWOL.substr(urlWOL.lastIndexOf("/") + 1);

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${imgId}.jpg`}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation period</span>
            <span>{rotation_period}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter} </span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
