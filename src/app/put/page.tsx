'use client';

import { localhost } from "@/src/common";
import { useState } from "react";

const index = () => {

    const [id, setId] = useState<number | undefined>(undefined)
    const [name, setName] = useState<string>('')

    const putData = async () => {
        if(!id || name.length === 0) {
            alert("enter the missing details");
            return;
        }
        const resposne = await fetch(`${localhost}/${id}`, {
            method: 'put',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({name:`${name}`})
        });
        const endResult = await resposne.text();
        if(endResult.includes("updated")){
            setId(undefined);
            setName('');
            alert("Name updated in the database");
        }
        else {
            alert(endResult);
        }
    }

    return (
        <div className="flex">
            <input type="number" placeholder="enter the id to change the name" value={id ?? ''} onChange={e => setId(parseInt(e.target.value))}/>
            <input type="text" placeholder="enter the name to change the name" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={putData}>Submit</button>
        </div>
    )
}

export default index;