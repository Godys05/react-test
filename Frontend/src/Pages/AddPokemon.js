import React from 'react';
import POKEMON_API from '../utils/POKEMON_API';
import axios from 'axios';
import './styles/addPokemon.css';

class AddPokemon extends React.Component {
    state = { 
        pokemon: {
            name: '',
            image: '',
        },
        success: false,
        fail: false,
    }
    

    handleChange = e => {
        this.setState({
            pokemon: {
                ...this.state.pokemon,
                [e.target.name]: e.target.value,
            }
        })
    }

    render() {
        return(
            <div className="add">
                <div className="success" hidden={!this.state.success}>Pokemon succesfully added!</div>
                <div className="fail" hidden={!this.state.fail}>ERROR</div>
                <form>
                    <label>
                        Name:
                    </label>
                    <input type="text" name="name" value={this.state.pokemon.name} onChange={this.handleChange}/>
                    <label>
                        Image:
                    </label>
                    <input type="text" name="image" value={this.state.pokemon.image} onChange={this.handleChange}/>
                    <button type="button" className="btn btn-success" onClick={this.addPokemon.bind(this)}>Add Pokemon</button>
                </form>
            </div>
        )
    }

    addPokemon() {
        this.setState({success: false, fail: false})
        let count = 0;
        axios.get(POKEMON_API.url)
        .then(res => {
            count = res.data.count;
            axios.post(POKEMON_API.url,
                {
                    id: count+1,
                    name: this.state.pokemon.name,
                    image: this.state.pokemon.image,
                })
                .then(res => {
                    console.log(res);
                    this.setState({success: true})
                })
                .catch(err => {
                    console.log(err);
                    this.setState({fail: true})
                });
        })
        .catch(err => this.setState({fail: true}));
    }
}
export default AddPokemon;