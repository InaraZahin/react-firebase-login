import React from 'react';
import tenor from './tenor.gif'

const Hero = ({handleLogout}) => {
    return(
        <section className= "hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>    
            </nav>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "100px"}}>
                <img src={tenor} alt="Not Found" style={{width: "400px", height: "300px"}} />
            </div>
            
        </section>    
    );
};

export default Hero;
