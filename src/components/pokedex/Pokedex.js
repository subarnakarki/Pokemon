import React, { Component } from 'react';
import '../pokecard/Pokecard'
import './Pokedex.css'
import Pokecard from '../pokecard/Pokecard';

class Pokedex extends Component {
  render() { 
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>
    }
    return ( 
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => {
            const {pkdx_id, name, base_experience, types} = p;
            return <Pokecard id={pkdx_id} name={name.english} types={types} exp={base_experience}/>
          })}
        </div>
      </div>
     );
  }
}
 
export default Pokedex;