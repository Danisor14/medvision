import { FormControl, FormControlLabel, FormLabel, RadioGroup as MuiRadioGroup } from '@material-ui/core';
import React from 'react';


const RadioGroup = (props) => {

    const { color, direction, name, value, onChange, items } = props;

    return (  
        <FormControl>
            <FormLabel color={color} >Genero</FormLabel>
            <MuiRadioGroup 
                row={direction}
                name={name}
                value={value.isMarried}
                onChange={onChange}
            >   
                { items.map((item, index) => (
                    <FormControlLabel 
                        label={item.label} 
                        value={item.value} 
                        control={<Radio/>} 
                        key={index}
                    />
                ))}
            </MuiRadioGroup>
        </FormControl>
    );
}
 
export default RadioGroup;