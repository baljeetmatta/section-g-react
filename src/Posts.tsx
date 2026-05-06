//Paging 

import { useEffect, useRef, useState } from "react";
type PostType={
    id:number,
    title:string,
    body:string
}
//Fetch ->API ->Products
const Posts=()=>{

    const abortController=useRef<AbortController|undefined>(undefined);

    const [posts,setPosts]=useState<PostType[]|undefined>(undefined);
    const [page,setPage]=useState(1);

    useEffect(()=>{
        abortController.current?.abort();
        abortController.current=new AbortController();
        

        fetch("https://jsonplaceholder.typicode.com/posts?_page="+page+"&_limit=10",{
            signal:abortController.current?.signal
        })
        .then((response)=>{
            return response.json();
        }).then((response)=>{
                setPosts(response);
        })

    },[page]);

    return (

        <>
        <div>
            <button onClick={()=>setPage(page+1)}>Next</button>
        </div>
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </tr>
            </thead>
            <tbody>
                {
                    posts?.map((item)=>{
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        )
                    })
                }


            </tbody>
        </table>
       
        
        
        </>
    )


}
export default Posts;
