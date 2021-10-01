import React, {useContext, useEffect} from 'react';
import {Grid, makeStyles, } from '@material-ui/core';
import Person from './Person';
import medvisionContex from '../context/medvisionContext';


const useStyles = makeStyles(() => ({
    grid: {
        margin: 'auto'
    }
}));

const ListPeople = () => {
    const classes = useStyles();

    const medContex = useContext(medvisionContex);
    const { login, people } = medContex;

    useEffect(() => {
      login();
    }, []);

    return (  
        <Grid 
            className={classes.grid}
            container item
            xs={12} 
            justify='center'
            alignItems='center'
            spacing={2}
            direction='row'
        >   
            {people.map(person => (
                <Person 
                    key={person.personID}
                    person={person} 
                />
            ))}
        
        </Grid>
    );
}
 
export default ListPeople;