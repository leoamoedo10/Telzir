import React from "react";

import PageHeader from "../../components/PageHeader";
import PageResults from '../../components/PageResults';
import { planNormal, planPlus } from "./calculation";

import "./styles.css";

export default class Calculate extends React.Component {

  state = {
    params: [],
  }

  submitForm = (e) => {
    e.preventDefault();

    if (this.inputOrigin.value === this.inputDestiny.value) {
      alert("O campo Origem não pode ser igual ao campo Destino!");
    } else if (Number(this.inputTime.value) < 0) {
      alert("O campo Minutos não pode ser negativo. Tente novamente!");
    } else {
      let origin = Number(this.inputOrigin.value);
      let destiny = Number(this.inputDestiny.value);
      let plan = Number(this.inputPlan.value);
      let time = Number(this.inputTime.value);

      let valuePlanNormal = planNormal(origin, destiny, time);
      let valuePlanPlus = planPlus(origin, destiny, plan, time);
      
      let obj = {origin, destiny, plan, time, valuePlanNormal, valuePlanPlus};
      this.setState({params: [obj] });
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
              <label>Origem (DDD)</label>
              <select
                defaultValue=""
                ref={(input) => (this.inputOrigin = input)}
                required
              >
                <option value="" disabled hidden>
                  Selecione
                </option>
                <option value="11">011</option>
                <option value="16">016</option>
                <option value="17">017</option>
                <option value="18">018</option>
              </select>
            </div>

            <div className="select-block">
              <label>Destino (DDD)</label>
              <select
                defaultValue=""
                ref={(input) => (this.inputDestiny = input)}
                required
              >
                <option value="" disabled hidden>
                  Selecione
                </option>
                <option value="11">011</option>
                <option value="16">016</option>
                <option value="17">017</option>
                <option value="18">018</option>
              </select>
            </div>

            <div className="input-block">
              <label>Minutos de ligação</label>
              <input
                type="number"
                ref={(input) => (this.inputTime = input)}
                required
              />
            </div>

            <div className="select-block">
              <label>Plano FaleMais</label>
              <select
                defaultValue=""
                ref={(input) => (this.inputPlan = input)}
                required
              >
                <option value="" disabled hidden>
                  Selecione
                </option>
                <option value="30">FaleMais 30</option>
                <option value="60">FaleMais 60</option>
                <option value="120">FaleMais 120</option>
              </select>
            </div>

            <button type="submit">Calcular</button>
          </form>

          <main>
            {this.state.params.map((p) => {
              return (
                <PageResults params={p} />
              )
            })}
          </main>
        </div>
      </>
    );
  }
}
