import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "log in",
            isLoggedIn: true
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
        }))
        
    }
    
    render() {
        return (
            <div className= {css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
                
            </div>
        )
    }
}




export default NavBarForm;