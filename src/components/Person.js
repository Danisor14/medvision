import React from 'react';
import {Grid, Card, CardHeader, CardContent, CardActionArea, Avatar, makeStyles, Typography } from '@material-ui/core';
import ModalHouse from './ModalHouse';

const useStyles = makeStyles(() => ({
    grid: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 10,
        maxWidth: 400,
    },
}));

const Person = ({ person }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    return (  
        <Grid 
            item
            xs={9} sm={6} md={4}  
            className={classes.grid}
        >
            <Card>
                <CardActionArea
                    onClick = { () => {
                        handleOpen();
                    }}
                >
                    <CardHeader
                        avatar={
                            <Avatar>
                                {person.fisrstName[0]}
                            </Avatar>
                        }
            
                        title={`${person.fisrstName} ${person.lastName}`}
                        subheader={`Document: ${person.document}`}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {`Estado civil: ${ person.isMarried ? 'Casado' : 'Soltero' }`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {`Fecha de nacimiento: ${ person.birthDate}`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>  

            <ModalHouse open={open} handleClose={handleClose} houses={person.houses} />      
        </Grid>
    );
}
 
export default Person;

