import React, { useState } from 'react';
import classes from '@material-ui/core/TextField';
import { FormContainer, StyledForm, StyledTextField } from '../styles/Form'

const Form = () => {
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.make.value)
        fetch('http://localhost:4000/residents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                make: event.target.make.value,
                model: event.target.model.value
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
    }

    return (
        <FormContainer>
            <StyledForm onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="Make" name="make" value={make} onChange={(event => setMake(event.target.value))} />
                <StyledTextField id="standard-basic" label="Model" name="model" value={model} onChange={(event => setModel(event.target.value))} />
                <input type="submit" />
            </StyledForm>
        </FormContainer>
    )
}

export default Form