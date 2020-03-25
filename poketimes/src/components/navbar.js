import React from 'react'
import { Link} from 'react-router-dom'

const Navbar=()=>{
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="//#endregion"className="brand-logo">Poke 'Times</a>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to ="/About">About</Link></li>
                    <li><Link to ="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar