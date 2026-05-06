import { useCallback, useMemo, useState } from "react";

const WithoutMemo=()=>{

const [count,setCount]=useState(1);
const [text,setText]=useState("");
//define - but we are not calling

    // const expensiveCal=(cal:number)=>{
    //     console.log("Calulating...")
    //     let total=0;
    //     for(let i=1;i<=10000000;i++)
    //         total+=i;

    //     console.log("Done...")

    //     return total+cal;
    // }
     const expensiveCal=useCallback((cal:number)=>{
        console.log("Calulating...")
        let total=0;
        for(let i=1;i<=10000000;i++)
            total+=i;

        console.log("Done...")

        return total+cal;
    },[])

    const result=useMemo(()=> expensiveCal(count),[count]);
    return (
        <>
        <div>Result:{result}</div>
        <div>Count :{count}</div>
        <div>Text:{text}</div>
        <button onClick={()=>setCount(count+1)}>Change</button>
       <button onClick={()=>setText("Hello")}>Change Text</button>
        </>
    )




}
export default WithoutMemo;
