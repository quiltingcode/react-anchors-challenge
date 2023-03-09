import React from 'react';

function NavBarChild(props) {
    return (
        props.isLoggedIn ? (
            <div>
                <form>
                    <label>Username: </label>
                    <input placeholder="username"></input>
                    <label>Password: </label>
                    <input placeholder="password"></input>
                    <button onClick={props.handleClick}>Submit</button>
                </form>
            </div>
        ) : (
            <div>
                <button onClick={props.handleClick}>Log in</button>
            </div>
        )
    )
}

export default NavBarChild;