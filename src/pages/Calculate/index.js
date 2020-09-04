import React from "react";

import PageHeader from "../../components/PageHeader";

import "./styles.css";

export default class Calculate extends React.Component {

  submitForm = (event) => {  
    event.preventDefault();

    if (Number(this.inputOrigin.value) === this.inputDestiny.value) {
      alert('O campo Origem não pode ser igual ao campo Destino!');
    } if (Number(this.inputTime.value) < 0) {
      alert('O campo Minutos não pode ser negativo. Tente novamente!');
    } else {
      alert('Funcionou!');
    }

  }

  render() {
    return (
      <>
        <div>
          <PageHeader />
        </div>
        <form onSubmit={this.submitForm} className="calcule">
          <div className="select-block">
            <select ref={(input) => this.inputOrigin = input} required>
              <option value="" disabled hidden>
                Origem (DDD)
              </option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
            </select>

            <select ref={(input) => this.inputDestiny = input} required>
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
              <input type="number" ref={(input) => {this.inputTime = input}} required/>
            </div>

            <select ref={(input) => this.inputPlan = input} required>
              <option value="" disabled hidden>
                Plano FaleMais
              </option>
              <option value="30">FaleMais 30</option>
              <option value="60">FaleMais 60</option>
              <option value="120">FaleMais 120</option>
            </select>
          </div>
          <button type="submit">Calcular</button>
        </form>
      </>
    );
  }
}
