import React ,{useState}  from 'react';
import Result from "./Result";
import ProData from "./Data";


function App() {

  //input data
const [data,setDate] = useState({
  price:"",
  people: "",
  rate: ""
});

const [result,setResult] = useState({
  total:"",
  tips:"",
  pay:""
})


function handleInput(event){
  const { name, value } = event.target;
  setDate(preData=>{
    if (name === "price") {
      return {
        price:value,
        people: preData.people,
        rate: preData.rate
      };
    } else if (name === "people") {
      return {
        price:preData.price,
        people: value,
        rate: preData.rate
      };
    } else if (name === "rate") {
      return {
        price:preData.price,
        people: preData.people,
        rate: value
      };
    }
  })
}


//PST
const [pstGst,setpstGst] =useState("");
function changePro2(event){
    const selectPstGst=event.target.value;
    setpstGst(selectPstGst);
  }

// calculate Tips result


let totalTips = (data.price*(1+(pstGst/100)) * (data.rate/100)).toFixed(2);

let totalPrice = (data.price*(1+(pstGst/100)) * (1+ (data.rate/100))).toFixed(2);

let everyonePay = (totalPrice/data.people).toFixed(2);

function calculate(event){
  setResult(()=>{
    return {
      total:totalPrice,
      tips:totalTips,
      pay:everyonePay
    }
  });
  event.preventDefault();
}


// include Tax or not 
const [tax1,Settax] = useState("true")
function TaxOrNot(event){
const a = event.target.id;
if( a==="include"){
  Settax(true)
}
else {Settax(false)};

setpstGst ("");
}


//reset
function reset(event){
  setDate({ price:"",
  people: "",
  rate: ""})
}


console.log()
// render content
  return (
    <div className="App">
    <form onSubmit={calculate}>
    <div className = "first">
    <h2 > Is the Bill include Tax?</h2>
    </div>

    <div className = "tax">
      <input id = "include" type="radio" name = "tax" defaultChecked value ={tax1} onChange={TaxOrNot} ></input>
      <label htmlFor="include">Include</label>
      <input id = "notinclude" type="radio" name = "tax"  value = {tax1} onChange={TaxOrNot} ></input>
      <label htmlFor="notinclude">Not include</label>
    </div>
    
    
   
      { !tax1 ? <div><div className = "Pst">
    <label htmlFor = "pst">Your provience</label>
    <select id = "pst" name = "pst"  onChange={changePro2} value={pstGst} >
            <option  value="" disabled >Please select</option>
            {ProData.map(oneplace=>{
            return <option key ={ oneplace.id } value={oneplace.PSTGST} >{oneplace.name}</option>
        })}
        </select>
        <h2 className="showTax">Tax Rate is {pstGst} %</h2>
    </div>
    <label htmlFor = "price">Price (Before Tax):</label></div> : 
    <label htmlFor = "price">Price (After Tax):</label>}
      
      
     <input type = "number" id="price" name= "price" required placeholder="Price"  onChange ={handleInput} value = {data.price}></input>
     <label htmlFor = "people">Number of people:</label>
     <input type = "number" id="people" name= "people" required placeholder="How many people" onChange ={handleInput} value = {data.people}></input>
     <label htmlFor = "rate">Rate:</label>
     <input type = "number" id="rate" name= "rate" required placeholder="Tips Rate" min="0" max="30" onChange ={handleInput} value = {data.rate}></input>
     <div className="button">
     <button>Calculate</button>
     <button onClick={reset}>Reset</button>
     </div>
     
    </form>
    
    
    <Result 
      total1={result.total} 
      tips1={result.tips}
      pay1={result.pay}  
    />
     
    </div>
  );
}

export default App;
