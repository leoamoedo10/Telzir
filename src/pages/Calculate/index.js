import React from "react";

import PageHeader from "../../components/PageHeader";

import "./styles.css";

export default class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Seu sabor favorito é: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div>
          <PageHeader />
        </div>
        <form onSubmit={this.handleSubmit} className="calcule">
          <div className="select-block">
            <select value="" required>
              <option value="" disabled hidden>
                Origem (DDD)
              </option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
            </select>

            <select value="" required>
              <option value="" disabled hidden>
                Destino (DDD)
              </option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
            </select>

            <div className="input-block">
              <label>Minutos de ligação</label>
              <input type="number" />
            </div>

            <select value="" required>
              <option value="" disabled hidden>
                Plano FaleMais
              </option>
              <option value="30">FaleMais 30</option>
              <option value="60">FaleMais 60</option>
              <option value="120">FaleMais 120</option>creation form page information
            </select>
          </div>
          <button type="submit">Calcular</button>
        </form>
      </>
    );
  }
}
