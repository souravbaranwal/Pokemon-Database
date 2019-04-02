import React, { Component } from "react";

class PokemonRender extends Component {
  index(string) {
    var arr = string.split("/");
    var result = arr[arr.length - 2];
    return result;
  }

  render() {
    let { searchTerm, searchData } = this.props;

    return (
      <section className="pokemon-parent">
        {searchData
          .filter(elm => elm.name.startsWith(searchTerm))
          .map((poke, index) => {
            const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.index(
              poke.url
            )}.png`;
            return (
              <div className="pokemon text-center">
                <img src={url} alt="pokemon" />
                <p>{poke.name}</p>
              </div>
            );
          })}
      </section>
    );
  }
}

export default PokemonRender;
