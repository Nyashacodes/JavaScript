import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://i.pinimg.com/474x/68/7d/ed/687dedbb44330094705fe031b63b8efa.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const AppLayout = () =>{
    return <div className="app">
        <Header/>
    </div>; 
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>)