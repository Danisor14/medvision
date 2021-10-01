import React, {useState} from 'react';
import { Grid, makeStyles, Paper, FormControl, Formlabel, RadioGroup, FormControlLabel, FormLabel, Radio } from '@material-ui/core';
import Input from './controls/Input';

const initialValues = {
    document: '',
    firstName: '',
    lastName: '',
    birthDate: new Date(), 
    isMarried: 'casado',
    height: ''
}

const useStyles = makeStyles((theme) => ({
    form: {
        '& .MuiFormControl-root' : {
            width: '40%',
            margin: theme.spacing(2),
        }
    },
    container: {
        margin: 20,
        padding: 10
    }
}));

const PeopleForm = () => {
    const [value, setValue] = useState(initialValues);
    const classes = useStyles();

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    return (  
        <Paper className={classes.container} >
            <form className={classes.form}>
                <Grid
                    container
                    direction='column'
                >
                    <Input
                        name='document'
                        label='Documento'
                        color='secondary'
                        value={value.document}
                        onChange={handleChange}
                    />

                    <Input
                        name='firstName'
                        label='Nombre'
                        color='secondary'
                        value={value.firstName}
                        onChange={handleChange}
                    />

                    <Input
                        name='lastName'
                        label='Apellido'
                        color='secondary'
                        value={value.lastName}
                        onChange={handleChange}
                    />

                    <Input
                        name='height'
                        label='Altura'
                        color='secondary'
                        value={value.height}
                        onChange={handleChange}
                    />

                    <FormControl>
                        <FormLabel color='secondary' >Genero</FormLabel>
                        <RadioGroup 
                            row
                            name='isMarried'
                            value={value.isMarried}
                            onChange={handleChange}
                        >
                            <FormControlLabel label='Casado' value='casado' control={<Radio/>} />
                            <FormControlLabel label='Soltero' value='soltero' control={<Radio/>} />
                        </RadioGroup>
                    </FormControl>
                    
                </Grid>
            </form>
        </Paper>
    );
}
 
export default PeopleForm;