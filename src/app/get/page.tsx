'use client'

import { useState } from "react";
import { localhost } from "@/src/common";

export default function Home() {

  const [data, setData] = useState<string[]>([]);

  const getData = async() => {
    console.log(localhost)
    const response = await fetch(localhost);
    console.log(response)
    setData(await response.json())
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {
        data.length > 0 && 
        data.map((name: any, index) => {
          return (
           <div key={index} className="flex col gap-1">
            <div className="flex gap-2 w-1/8 border border-primary-foreground">
              <p>{name.id}</p>
              <p>{name.name}</p>
            </div>
           </div>
          )
        })
      }
    </div>
  );
}
