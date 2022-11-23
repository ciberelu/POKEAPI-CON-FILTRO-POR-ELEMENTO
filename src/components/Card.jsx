import "./Card.css"

const Card = ({pokemones, especifico, oneNamePokemon, imgPokemon, porTipo}) => {
  console.log(porTipo);
  // console.log(especifico);
  if (especifico ==="especifico") {
    return (
      <div className="card1">
          <p className="card__name1">{oneNamePokemon}</p>
          <div className="card__circle1"></div>
          <img className="card__img1" src={imgPokemon} alt="pokemon-img" />
    
      </div>
    )
  }else if (especifico ==="porTipo") {
    return (
      <div className="card">
          <p className="card__name">{porTipo[0][0]}</p>
          <div className="card__circle"></div>
          <img className="card__img" src={porTipo[0][1]} alt="pokemon-img" />
          <p className="parrafo">Elemento: {porTipo[0][2]}</p>
      </div>
    )
  }
  
  
  
  else{
    return (
      <div className="card">
          <p className="card__name">{pokemones[0]}</p>
          <div className="card__circle"></div>
          <img className="card__img" src={pokemones[1]} alt="pokemon-img" />
  
      </div>
    )
  }
  
  console.log(pokemones);
  
}

export default Card 

