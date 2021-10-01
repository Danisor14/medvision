import React, { useReducer } from 'react'
import reducer from './reducer'
import medvisionContex from './medvisionContext'
import axios from 'axios'
import { GET_PEOPLE, LOGIN } from './types'


const State = (props) => {
    const initialState = {
        people: [],
        token: null
    }


    const [state, dispatch] = useReducer(reducer, initialState)


    const login = async () => {
        const url = 'http://hiring.medvision.com.co/api/Auth';

        try {
            const response = await axios.post(url,
                {
                    "username": "MedUser2021_010",
                    "password": "Zanahoria Dubai2021"
                }
            );
            
            dispatch({
                type: LOGIN,
                payload: response.data.token
            });     

            getPeople(response.data.token);

        } catch (error) {
            console.error(error)   
        }
    }
    

    const getPeople = async (token) => {
        try {
            const url = 'http://hiring.medvision.com.co/api/Person/GetAllPeople';
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            
            const response = await axios.get(url, config);
            dispatch({
                type: GET_PEOPLE,
                payload: response.data
            });
            console.log(response);

        }catch(err) {
            console.error(err)
        } 
    }

    return (  
        <medvisionContex.Provider 
            value={{
                token: state.token,
                people: state.people,
                login,
            }}
        >
            {props.children}
        </medvisionContex.Provider>
    );
}
 
export default State;