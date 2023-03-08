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
            buttonText: prevState.buttonText === "Log in" ? "Submit" : "Log in",
            isLoggedIn: prevState.isLoggedIn === false ? true : false
        }))
    }
    
    render() {
        return (
            <div className= {css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                {this.state.isLoggedIn ? (
                    
                    <form>
                        <label>Username: </label>
                        <input defaultValue="username"></input>
                        <label>Password: </label>
                        <input defaultValue="password"></input>
                        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                    </form>
                ) :
                (
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                )}
                </div>
                
                    
                
                
            </div>
        )
    }
}




export default NavBarForm;