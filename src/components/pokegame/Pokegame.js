import React, { Component } from 'react';
import Pokedex from '../pokedex/Pokedex'
const pokemon = require('../../pokemonData.json');

console.log(pokemon);

pokemon.map((p) => {
  p.base_experience = Math.floor(Math.random() * 500);
})

class Pokegame extends Component {
  static defaultProps = {
    pokemon
  };

  render() { 
    let hand1 = [];
    let hand2 = [];
    while (hand1.length < 4) {
      hand1.push(pokemon[Math.floor(Math.random() * this.props.pokemon.length)]);
      hand2.push(pokemon[Math.floor(Math.random() * this.props.pokemon.length)]);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
      </div>
     );
  }
}
 
export default Pokegame;