/*
Parent Element->Child Elements
props

Context->Global Variable simple data

Complex->Logical
Redux

Store, Action, Reducer

1. Store- Storage of Data

2. Action ->Event 

3. Reducer ->Event Handler
1. Existing State of Store
2. Action

return the update State of Store

1. Design the Store
2. Define Actions
3. Create Reducer
4. Setup Store

1. Design the Store
        Structure of Data
        BugTracking->Todo App
        [
            {
                id:number,
                description:string,
                resolved:boolean
            }
        ]
        ECommerce
        Carts,userAuth,Favourites
        {
            carts:[
                {
                    productid:number,
                    qty:number
                }
            ],
            userAuth:{},
            favourites:[{productid:number}]
        }
        
2. Define Actions Event Raise

Bug Add, Bug Delete, Bug Resolve
Bug Add
{
    type:"BUG_ADDED",
    payload:{
    description:string
    }
}
    Bug Delete
    {
            type:"BUG_DELETE",
            payload:{
                id:number
            }
    }
    Bug Resolve
    {
            type:"BUG_RESOLVE",
            payload:{
                id:number
            }
    }

    3. Reducer -Event Handle

    PLAIN function, (existingState,action)

    return updatedStore
*/

import { createStore } from "redux"

//1. Design a Store
type StoreType={
    id:number,
    description:string,
    resolved:boolean
}
type AddActionType={
    type:"ADD",
    payload:{
        description:string
    }
}
type DeleteActionType={
     type:"DELETE",
    payload:{
        id:number
    }
}
type ResolveActionType={
     type:"RESOLVE",
    payload:{
        id:number
    }
}

type BugActions=AddActionType|DeleteActionType|ResolveActionType

//3. Reducer
let id=1;
function BugReducer(state:StoreType[]=[],action:BugActions)
{
    if(action.type=="ADD")
    {
            const updatedState=[...state];
            updatedState.push({
                id:id,
                description:action.payload.description,
                resolved:false
            })
            return updatedState;


    }
     if(action.type=="DELETE")
    {
           
            const updatedState=state.filter((item)=>{
                    if(item.id!=action.payload.id)
                        return true;

            });
            return updatedState;
    }


    if(action.type=="RESOLVE")
    {
           
            const updatedState=state.map((item)=>{
                    if(item.id==action.payload.id)
                        item.resolved=true;

                    return item;

            });
            return updatedState;
    }


    return state;

}
//4 Setup store
const store=createStore(BugReducer);

console.log(store.getState());


store.dispatch({
    type:"ADD",
    payload:{
        description:"First Bug"
    }
})
console.log(store.getState());


store.dispatch({
    type:"RESOLVE",
    payload:{
        id:1
    }
})
console.log(store.getState());

store.dispatch({
    type:"DELETE",
    payload:{
        id:1
    }
})
console.log(store.getState());
