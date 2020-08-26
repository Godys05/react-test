import React from 'react';
import axios from 'axios';
import POKEMON_API from '../utils/POKEMON_API';
import './styles/managePokemon.css';

import Pokemon from '../Components/Pokemon';

class managePokemon extends React.Component {
    state = {
        pokemon: [],
        success: false,
        fail: false,
    }
    componentDidMount() {
        this.getAllPokemon();
    }

    render() {
        const {pokemon} = this.state;
        return(
            <div>
                <div className="success" hidden={!this.state.success}>Pokemon succesfully Deleted!</div>
                <div className="fail" hidden={!this.state.fail}>ERROR</div>
                <div className="pokes">
                    {
                        pokemon.length!==0 ? pokemon.map(poke => {
                            return (<Pokemon id={poke.id} name={poke.name} image={poke.image}/>)
                        }) : <div className="no-pokemon">There is no pokemon</div>
                    }
                </div>
            </div>
        )
    }

    getAllPokemon() {
        axios.get(POKEMON_API.url)
        .then(function(res) {
            this.setState({pokemon: res.data.pokemon});
        }.bind(this))
        .catch(err => console.error(err));
    }
    
}
export default managePokemon;