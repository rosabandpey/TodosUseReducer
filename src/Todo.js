import React, { useReducer, useState } from 'react';


const getId=()=>{
    let id;
   return id=Date.now()
}

function reducer(state,action){

    switch (action.type){
        case "ADD_TODO":
            return  ([...state,{title:action.payload,id:getId()}])
            

        case "REMOVE_TODO":
            const newTodo=state.filter((item)=>item.id!=action.payload)
            
            return newTodo
                
        default :
            return state

    }
       
}

export default function Todo (){

    const [todos,dispatch]=useReducer(reducer,[])
    const [task,setTask]=useState('')
    

    const addTodo=(e)=>{
        e.preventDefault(e)
        if(!task) return
        dispatch({type:"ADD_TODO",payload:task})
        
    }

    const removeTodo=(id)=>{
        dispatch({type:"REMOVE_TODO",payload:id})
        }

    return(

        <div>
            <form onSubmit={addTodo}>
                <input value={task} onChange={e=>setTask(e.target.value)}/>
                <button type="submit" >Add Todo</button>
            </form>

            <ol>
                {todos.map(item=>(
                    <li key={item.id}>{item.id} {item.title}
                    
                    <span 
                    style={{color:'red',padding:"5px",cursor:"pointer"}} 
                    onClick={()=>removeTodo(item.id)}>
                        x</span>
                    </li>
                )
                )}
            </ol>
        </div>

    )

}