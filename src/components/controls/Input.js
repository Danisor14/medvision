import React from 'react';
import { TextField } from '@material-ui/core'

const Input = (props) => {

    const { name, label, color, value, onChange } = props;

    return (  
        <TextField
            variant='outlined'
            size='small'
            name={name}
            label={label}
            color={color}
            value={value}
            onChange={onChange}
        />
    );
}
 
export default Input;