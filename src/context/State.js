import React, { useReducer } from 'react'
import reducer from './reducer'
import medvisionContex from './medvisionContext'
import axios from 'axios'


import { GET_PEOPLE } from './types'


const State = (props) => {
    const initialState = {
        people: []
    }


    const [state, dispatch] = useReducer(reducer, initialState)
    
    const getPeople = async () => {
        
        /* try {

        }catch(err) {
            console.error(err)
        } */
    }

    return (  
        <medvisionContex.Provider 
            value={{
                
            }}
        >
            {props.children}
        </medvisionContex.Provider>
    );
}
 
export default ProjectState;