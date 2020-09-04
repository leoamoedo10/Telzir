import React from "react";

import PageHeader from "../../components/PageHeader";

import "./styles.css";

export default class Calculate extends React.Component {
  submitForm = (e) => {
    e.preventDefault();

    if (this.inputOrigin.value === this.inputDestiny.value) {
      alert("O campo Origem não pode ser igual ao campo Destino!");
    } else if (Number(this.inputTime.value) < 0) {
      alert("O campo Minutos não pode ser negativo. Tente novamente!");
    } else {
      alert("Funcionou!");
      // let origin = Number(this.inputOrigin.value);
      // let destiny = Number(this.inputDestiny.value);
      // let plan = Number(this.inputPlan.value);
      // let time = Number(this.inputTime.value);
    }
  };

  render() {
    return (
      <>
        <div>
          <PageHeader />
        </div>

        <div id="page-calculate">
          <form onSubmit={(e) => this.submitForm(e)} className="calcule">
            <div className="select-block">
              <select
                defaultValue=""
                ref={(input) => (this.inputOrigin = input)}
                required
              >
                <option value="" disabled hidden>
                  Origem (DDD)
                </option>
                <option value="11">011</option>
                <option value="16">016</option>
                <option value="17">017</option>
                <option value="18">018</option>
              </select>

              <select
                defaultValue=""
                ref={(input) => (this.inputDestiny = input)}
                required
              >
                <option value="" disabled hidden>
                  Destino (DDD)
                </option>
                <option value="11">011</option>
                <option value="16">016</option>
                <option value="17">017</option>
                <option value="18">018</option>
              </select>

              <div className="input-block">
                <label>Minutos de ligação</label>
                <input
                  type="number"
                  ref={(input) => (this.inputTime = input)}
                  required
                />
              </div>

              <select
                defaultValue=""
                ref={(input) => (this.inputPlan = input)}
                required
              >
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
        </div>
      </>
    );
  }
}
