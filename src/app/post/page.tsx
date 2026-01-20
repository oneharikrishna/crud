'use client'

import { useState } from "react";
import { localhost } from "@/src/common";

const index = () => {
    const [inputData, setInputData] = useState<string>('');
    const postData = async() => {
        if(inputData.length === 0) {
            alert("Input field is empty")
            return;
        }
        const response = await fetch(localhost,{
            method: 'post',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({name:`${inputData}`})
        });
        const endResult = await response.text();
        if(endResult.includes("added")){
            const idString = endResult.split(".")[1]
            const insertId = idString.split(" ")[3]   
            alert(`${inputData} added to the database, Id is ${insertId}`);
            setInputData('');
        }
        else{
            alert(endResult)
        }
    }
    return (
        <div className="flex col">
            <input type="text" value={inputData} placeholder="enter a name" onChange={e => setInputData(e.target.value)}/>
            <button onClick={postData}>Submit</button>
        </div>
    )
}

export default index;