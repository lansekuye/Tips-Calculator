import React from "react";
import CurrentTime from "./CurrentTime";
function Header (){
    return (
        <div className= "Header">
            <h1 >My-Tips-Calculator</h1>
            <CurrentTime />
        </div>
    )
}
export default Header;