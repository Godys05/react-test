import React from 'react';
import axios from 'axios';
import POKEMON_API from '../utils/POKEMON_API';

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
            <div className="pokes">
                <div className="success" hidden={!this.state.success}>Pokemon succesfully Deleted!</div>
                <div className="fail" hidden={!this.state.fail}>ERROR</div>
                {
                    pokemon.length!==0 ? pokemon.map(poke => {
                        return (<Pokemon id={poke.id} name={poke.name} image={poke.image} onDelete={this.deletePokemon.bind(this)}/>)
                    }) : <div className="no-pokemon">There is no pokemon</div>
                }
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

    deletePokemon(id) {
        axios.delete(`${POKEMON_API.url}/${id}`)
        .then(res => {
            this.setState(
                {
                    pokemon: this.state.pokemon.filter((_,i) => i !== res.data.data),
                    sucess: true
                }
            );
            this.setState({success: true});
        })
        .catch(err => { this.setState({fail: true}); });
    }
    
}
export default managePokemon;