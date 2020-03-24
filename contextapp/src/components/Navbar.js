import React,{Component} from 'react';
import  { ThemeContext} from '../contexts/ThemeContext';
class Navbar extends Component {
     static contextType=ThemeContext;
    
    render() {
        const { isLightTheme,light,dark} =this.context;
        const theme =isLightTheme? light : dark
        return (
            <nav style={{background:theme.ul,color:theme.syntax}}>
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