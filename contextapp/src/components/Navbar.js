import React,{Component} from 'react';

class Navbar extends Component {

    
    render() {
        return (
            <nav>
                <h1>
                    context App
                </h1>
                <ul>
                    <li>home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            
        );
    }
}

export default Navbar;