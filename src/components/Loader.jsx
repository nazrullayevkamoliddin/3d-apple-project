import React from "react";
import animatedLoader from '../assets/images/logo-animated.gif';

function Loader() {
    return ( 
        <div className="loader">
            <img src={animatedLoader} alt="loader" />
        </div>
     );
}

export default Loader;