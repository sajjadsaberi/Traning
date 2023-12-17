import React from "react";

function Headers() {
    return(
        /* می توان بجای تگ والد اصلی یا تگ دیو کلی از تگ زیر استفاده کرد */
        // <> == <React.Fragment>
        <React.Fragment>  
        <div>
            <p>Hello World!</p>
            <p>{Math.floor(Math.random()* 100)}</p>
        </div>
        <div>
            <h3>ID : Sajjad.Front</h3>
        </div>
        </React.Fragment>
    );
};

export default Headers ;