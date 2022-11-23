//styles
import "./App.css"

import axios from "axios";
//hooks
import { useState, useEffect } from "react";

//componentes
import PokemonsSection from "./PokemonsSection";
import Input from "./Input";
import Button from "./components/Button"

//cada vez que se actualiza el componente con useState, se ejecuta el useEffect
const App = () =>{

    const [pokemones, setPokemones] = useState([])
    const [buscarOnePokemon, SetBuscarOnePokemon] = useState("")
    
    const [namePokemon, setnamePokemon] = useState("")
    const [imgPokemon, setimgPokemon] = useState("")
    const [tipo, setTipo] =useState("")
    const [porTipo, setPorTipo] = useState([])

    function regresar(params) {
        
        SetBuscarOnePokemon("")

    }

    function buscarTipo(params) {
        // console.log(pokemones);
        setPorTipo([])
        pokemones.forEach((pokemon, index)=>{
            // console.log(pokemon[2]);
            if (pokemon[2] === tipo) {
                // console.log(pokemon);
                setPorTipo(Inicio =>[...Inicio, [pokemon]])
                

            }
        })
        SetBuscarOnePokemon("porTipo")
    }
    
    
    const handlerName = (e)=>{
        // console.log(e.target.value);
        setnamePokemon(e.target.value)
        console.log(namePokemon);
    
    }

    const handlerTipo = (e) => {
        setTipo(e.target.value.toLowerCase())
        console.log(tipo);
    }
    // console.log(tipo);
    const fetchApi = async () =>{
        let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon.toLowerCase()}`)
        let data = await resp.json()
        // console.log(data);
        // console.log(data.sprites.other["official-artwork"].front_default);
        setimgPokemon(data.sprites.other["official-artwork"].front_default)
        // setnamePokemon(data)
        SetBuscarOnePokemon("especifico")
      }


    const getPokemones = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        .then((resp) => {
            resp.data.results.forEach((pokemon)=>{
                axios.get(pokemon.url)
                    .then((datos =>{
                        // console.log(datos.data.types[0].type.name);
                        setPokemones(datoInicio => [...datoInicio, [datos.data.name,  datos.data.sprites.other["official-artwork"].front_default, datos.data.types[0].type.name]])
                    }))
            })
        })
    }

    // console.log(pokemones);
    useEffect(()=>{
        getPokemones()
    },[])


    return (
        <div className="App">
            <h1 className="page__title">POKEAPI</h1>
            <div className="input__container">
                <Input
                    placeholder= "Busca tu poke"
                    handleBuscarNombre = {handlerName}
                
                />
                <Button
                    // click = {buscarUno}
                    click = {() => fetchApi()}
                    name = "Buscar"
                />

                <Button
                    // click = buscarUno}
                    
                    click = {() => (regresar())}
                    name = "regresar"
                />
            </div>

            <div className="input__container">
                <Input
                    placeholder = "Busca por tipo"
                    handleBuscarNombre = {handlerTipo}
                
                />
                <Button
                    // click = {buscarUno}
                    click = {() => buscarTipo()}
                    name = "Buscar"
                    
                />

                <Button
                    // click = {buscarUno}
                    click = {() => (regresar())}
                    name = "regresar"

                />
            </div>




            <PokemonsSection
                pokemones = {pokemones}
                buscarOnePokemon = {buscarOnePokemon}
                especifico = {buscarOnePokemon}
                oneNamePokemon = {namePokemon}
                imgPokemon ={imgPokemon}
                porTipo ={porTipo}
            />




        </div>
      )
}

export {App}