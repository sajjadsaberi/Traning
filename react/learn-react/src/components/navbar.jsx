import React from "react";

//Conditional Rendering 
// if-else

function Navbar() {
    const isLogin = true ;

    if(!isLogin) {
        return (
            <navbar>
                <button>Settings</button>
            </navbar>
        )
    } else {
        return (
            <navbar>
                <button>Login</button>
            </navbar>
        )
    };
};

export default Navbar ;