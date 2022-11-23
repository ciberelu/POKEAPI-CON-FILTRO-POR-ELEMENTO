import "./PokemonsSection.css"
import Card from "../src/components/Card"
import { useEffect } from "react"

function PokemonsSection({pokemones, buscarOnePokemon, especifico, oneNamePokemon, imgPokemon, porTipo}) { 

    console.log(porTipo);
    // console.log(buscarOnePokemon);
    console.log(especifico);
    useEffect(()=>{
    },[])

    if (buscarOnePokemon === "especifico") {
        return (
            <section>
                            <Card
                                especifico = {especifico}
                                oneNamePokemon = {oneNamePokemon}
                                imgPokemon = {imgPokemon}
                            />
        </section>
      )
    }else if (buscarOnePokemon === ""){
        return (
            <section>
               {                      
                    pokemones.map((valor, index)=>{
                        return(
                            <Card
                                key={index}
                                especifico = {especifico}
                                pokemones = {pokemones[index]}
                            />
                        )
                    })
                }
            
    
        </section>
      )
    }else if (buscarOnePokemon === "porTipo"){
        return (
            <section>
                

               {                      
                    porTipo.map((valor, index)=>{
                        return(
                            <Card
                                key={index}
                                especifico = {especifico}
                                pokemones = {porTipo[index]}
                                porTipo = {valor}
                            />
                        )
                    })
                }
            
    
        </section>
      )
    }

    
  
}

export default PokemonsSection