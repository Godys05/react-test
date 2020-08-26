import React from 'react';
import './styles/navbar.css';
import {
    Link,
    NavLink
} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return(
            <div>
                <nav>
                    <ul className="nav-content">
                        <li><Link to="/" className="nav-title">Poke CRUD</Link></li>
                        <li><NavLink to="/" activeClassName="active">Show Pokes</NavLink></li>
                        <li><Link to="/newPoke">Add Recipe</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;