import React, { useState } from 'react'


export const Form = () => {
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:4000/cars', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                make: make,
                model: model
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Make</label>
                <input name="make" value={make} onChange={(event => setMake(event.target.value))} />
                <label>Model</label>
                <input name="model" value={model} onChange={(event => setModel(event.target.value))} />
                <input type="submit" />
            </form>
        </>
    )
}
