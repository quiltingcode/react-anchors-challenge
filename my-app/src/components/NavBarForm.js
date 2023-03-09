import React from "react";
import css from "./css/NavBarSimple.module.css";
import NavBarChild from "./NavBarChild";

class NavBarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn === false ? true : false
        }), () => console.log(this.state.isLoggedIn))
    }
    
    render() {
        return (
            <div className= {css.NavBar}>
                <h1>My Gallery</h1>
                <NavBarChild
                isLoggedIn={this.state.isLoggedIn}
                handleClick={this.handleClick} />
            </div>
        )
    }
}




export default NavBarForm;