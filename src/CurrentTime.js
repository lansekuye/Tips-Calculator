import React,{useState} from "react";
function CurrentTime(){
    

    let myDate = new Date();
    let year = myDate.getFullYear();
    let month = myDate.getMonth();
    let day = myDate.getDate();

    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);
    
    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime)
    }
    
    setInterval(updateTime, 1000)

    return (
        <div className="showtime">
            <p > Today is {year}/{month}/{day}</p>
            <p > Current Time is {time}</p>
        </div>
    )
}
export default CurrentTime; 

