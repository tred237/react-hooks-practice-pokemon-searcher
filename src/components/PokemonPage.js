import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([])
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => {
      setPokemonList(data)
      setAllPokemon(data)
    })
  },[])

  function handleSearch(input){
    const newPokemonList = allPokemon.filter(pokemon => pokemon.name.includes(input))
    setPokemonList(newPokemonList)
  }

  function handlePokemonSubmit(pokemon){
    setAllPokemon([...allPokemon, pokemon])
    setPokemonList([...allPokemon, pokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onPokemonSubmit={handlePokemonSubmit} />
      <br />
      <Search onSearch={handleSearch} />
      <br />
      <PokemonCollection pokemonList={pokemonList}/>
    </Container>
  );
}

export default PokemonPage;
