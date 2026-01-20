'use client'

import { localhost } from "@/src/common";
import { useState } from "react";

const index = () => {
    const [id, setId] = useState<number | undefined>(undefined);

    const deleteData = async () => {
        if(id) {
            const response = await fetch(`${localhost}/${id}`, {
                method: 'delete',
                headers: {
                    "Content-Type" : "application/json"
                },
            });
            const endResult = await response.text();
            if(endResult.includes("deleted")){
                alert("Id deleted in the database");
                setId(undefined)
            }
            else {
                alert(endResult)
            }
        }
        else {
            alert("enter the id please")
        }
    }

    return (
        <div className="flex">
            <input type="number" value={id ?? ""} onChange={e => setId(parseInt(e.target.value))}/>
            <button onClick={deleteData}>Delete</button>
        </div>
    )
}

export default index;