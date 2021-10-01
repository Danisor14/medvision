import React from 'react';
import {AppBar, Typography, makeStyles, Toolbar, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';


const useStyles = makeStyles( (theme) => ({
    header: {  
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 150,
        width: '100%',
        marginBottom: 30,
        backgroundColor: theme.palette.secondary.main,
        
    },
    text :{
        fontFamily: 'Lobster' ,
        textAlign: 'center'
    },
    btn:{
        background: '#fff',
        minWidth: 90,
        marginLeft: 10,
        paddingInline: 10,
        color: theme.palette.secondary.main,
        textTransform: 'none'
    },
}));


const Header = () => {
    const classes = useStyles();
    return ( 
        <AppBar position={'static'} className={classes.header}>
            <Toolbar id="back-to-top-anchor" className={classes.header} >
                <Typography className={classes.text} variant='h4' color='inherit'>
                     Medvision Prueba tecnica
                </Typography>
                <Link to='add-people'>
                    <Button 
                        variant="contained" 
                        startIcon={<AddIcon/>}
                        className={classes.btn}
                    > 
                            Agregar Persona
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}
 
export default Header;