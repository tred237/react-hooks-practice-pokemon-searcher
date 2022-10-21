import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [frontImage, setImage] = useState(true)

  return (
    <Card>
      <div>
        <div className="image">
          <img src={frontImage ? pokemon.sprites.front : pokemon.sprites.back} alt="oh no!" onClick={() => setImage(!frontImage)} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
