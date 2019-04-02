import React, { Component } from "react";
import "./App.scss";
import PokemonRender from "./PokemonRender";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      searchValue: ""
    };
  }

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=400")
      .then(res => res.json())
      .then(data => this.setState({ pokemons: data.results }));
  }

  render() {
    return (
      <div className="main-container text-center">
        <section className="input-container">
          <h3>Pokemon Database</h3>
          <input
            type="text"
            onKeyUp={this.handleChange}
            placeholder="type your pokemons name!!"
          />
        </section>

        {
          <PokemonRender
            searchTerm={this.state.searchValue}
            searchData={this.state.pokemons}
          />
        }
      </div>
    );
  }
}

export default App;
