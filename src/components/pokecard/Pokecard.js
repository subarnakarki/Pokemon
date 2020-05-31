import React, {Component} from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const padToThree = (num) => (num <= 999 ?  `00${num}`.slice(-3) : num)

class Pokecard extends Component {
  render () {
    const {id, name, types, exp} = this.props;
    const pokemonTypes = types.join(', ');    
    let imgSrc = `${POKE_API}${padToThree(id)}.png`
    return (
      <div className='Pokecard'>
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={name} />
        </div>
        <div className='Pokecard-data'>Type: {pokemonTypes}</div>
        <div className='Pokecard-data'>Exp: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;