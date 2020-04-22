import React from "react";
function Result(props){
return (
    <div className="result">
    <p>The Total Price is: ${props.total1}</p>
    <p>The Total Tip is: ${props.tips1}</p>
    <p>Every people should pay: ${props.pay1}</p>
    </div>)

}

export default Result;