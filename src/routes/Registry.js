import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Registry(){
    const [registryData, setRegistryData]=useState([]);
    const [textInput, setTextInput] = useState("");
    const [error, setError] = useState(false);

    const addItem = (e)=>{
        e.preventDefault();
        
        const tempData = [...registryData]
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
    }
    console.log(registryData);

    useEffect(()=>{
        if(textInput.length>10)setError(true);
        else setError(false);

    },[textInput])

    return (
        <div>
            <h1>Home</h1>
            <Link to = "/">Click for Home</Link>
            <form onSubmit={addItem}>
                <label>text input:
            <input type= "text" value={textInput} onChange={(e)=>setTextInput(e.target.value)}/>
            </label>
            <input type = "submit" value="submit"/>
            </form>
            {error?<span style={{color:"red"}}>Error Occured.</span>: null}
        </div>
    )
}

export default Registry;