import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onPokemonSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  })

  function handleFormChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    const newPokemon = {
      name: formData.name,
      hp: parseInt(formData.hp,10),
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(pokemon => onPokemonSubmit(pokemon))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid type="text" label="Name" placeholder="Name" name="name" onChange={handleFormChange} />
          <Form.Input fluid type="number" label="hp" placeholder="hp" name="hp" onChange={handleFormChange} />
          <Form.Input
            fluid
            type="text"
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFormChange}
          />
          <Form.Input
            fluid
            type="text"
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
