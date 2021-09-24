import React, {useContext} from 'react';
import {Grid, makeStyles, } from '@material-ui/core';
import Person from './Person';


const people = [
    {
      "personID": 1,
      "document": "00000",
      "fisrstName": "Pepe 0",
      "lastName": "Perez 0",
      "birthDate": "1990-01-10T00:00:00",
      "isMarried": true,
      "height": 120,
      "houses": [
        {
          "houseID": 5,
          "description": "Description 0",
          "address": "St 0 Nw Something 1025 Ave.",
          "ownerID": 1
        }
      ]
    },
    {
      "personID": 2,
      "document": "00001",
      "fisrstName": "Pepe 1",
      "lastName": "Perez 1",
      "birthDate": "1991-02-11T00:00:00",
      "isMarried": false,
      "height": null,
      "houses": [
        {
          "houseID": 4,
          "description": "Description 1",
          "address": "St 1 Nw Something 1026 Ave.",
          "ownerID": 2
        }
      ]
    },
    {
      "personID": 3,
      "document": "00002",
      "fisrstName": "Pepe 2",
      "lastName": "Perez 2",
      "birthDate": "1992-03-12T00:00:00",
      "isMarried": true,
      "height": 122,
      "houses": [
        {
          "houseID": 3,
          "description": "Description 2",
          "address": "St 2 Nw Something 1027 Ave.",
          "ownerID": 3
        }
      ]
    },
    {
      "personID": 4,
      "document": "00003",
      "fisrstName": "Pepe 3",
      "lastName": "Perez 3",
      "birthDate": "1993-04-13T00:00:00",
      "isMarried": false,
      "height": null,
      "houses": [
        {
          "houseID": 2,
          "description": "Description 3",
          "address": "St 3 Nw Something 1028 Ave.",
          "ownerID": 4
        }
      ]
    },
    {
      "personID": 5,
      "document": "00004",
      "fisrstName": "Pepe 4",
      "lastName": "Perez 4",
      "birthDate": "1994-05-14T00:00:00",
      "isMarried": true,
      "height": 124,
      "houses": [
        {
          "houseID": 1,
          "description": "Description 4",
          "address": "St 4 Nw Something 1029 Ave.",
          "ownerID": 5
        }
      ]
    },
    {
      "personID": 6,
      "document": "123456",
      "fisrstName": "Pedro",
      "lastName": "Fulano",
      "birthDate": "1980-09-10T20:54:31.232",
      "isMarried": true,
      "height": 178,
      "houses": [
        {
          "houseID": 6,
          "description": "Descripcion 76",
          "address": "123 # 456",
          "ownerID": 6
        }
      ]
    }
  ]


const useStyles = makeStyles(() => ({
    grid: {
        margin: 'auto'
    }
}));

const ListPeople = () => {
    const classes = useStyles();

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