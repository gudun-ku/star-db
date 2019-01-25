import React, { Component } from 'react'

import './random-planet.css';

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src="https://starwars-visualguide.com/assets/img/planets/3.jpg" 
             alt="planet"
             />
        <div>
          
          <h4>Planet name</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>1234124</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation period</span>
              <span>24</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>10200</span>
            </li>
            
          </ul>
        </div>
        
      </div>
    )
  }
};
