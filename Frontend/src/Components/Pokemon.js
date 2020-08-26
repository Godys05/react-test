import React from 'react';
import './styles/pokemon.css';

class Pokemon extends React.Component {

    render() {
        return(
            this.props.id !== null && this.props.name != null && this.props.image !== null 
            ? 
            <div className="card">
                <img src={this.props.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{ this.props.name }</h5>
                    <button className="btn btn-danger" onClick={this.props.onDelete(this.props.id)}>Delete Pokemon</button>
                </div>  
            </div>
            :
            <div>No hay pokemon</div>
        )
    }
}

export default Pokemon;