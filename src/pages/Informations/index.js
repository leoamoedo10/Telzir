import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

import "./styles.css";

function Informations() {
  return (
    <>
      <div>
        <PageHeader />
      </div>

      <div id="page-informations">
        <section className="section-container">
          <div className="space-title-normal">
            <h2>Plano Normal</h2>
          </div>

          <div className="container-table">
            <table width="50%">
              <thead>
                <tr>
                  <th>Origem (DDD)</th>
                  <th>Destino (DDD)</th>
                  <th>R$/minuto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>011</td>
                  <td>016</td>
                  <td>1.90</td>
                </tr>

                <tr>
                  <td>016</td>
                  <td>011</td>
                  <td>2.90</td>
                </tr>

                <tr>
                  <td>011</td>
                  <td>017</td>
                  <td>1.70</td>
                </tr>

                <tr>
                  <td>017</td>
                  <td>011</td>
                  <td>2.70</td>
                </tr>

                <tr>
                  <td>011</td>
                  <td>018</td>
                  <td>0.90</td>
                </tr>

                <tr>
                  <td>018</td>
                  <td>011</td>
                  <td>1.90</td>
                </tr>
              </tbody>
            </table>

            <div className="col-12 col-md-6 text-plano-normal">
              <p>
                No plano normal da Telzir, o cliente pode fazer uma chamada de
                uma cidade para outra pagando uma tarifa fixa por minuto, com o
                preço sendo pré-definido em uma lista com os códigos DDDs de
                origem e destino.
              </p>
            </div>
          </div>
        </section>

        <section className="section-container">
          <div className="row">
            <div className="col-12 col-md-12 title-plano-plus">
              <h2>Plano Fale Mais</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-7 text-plano-plus">
              <p>
                Com o Plano FaleMais da Telzir, o cliente adquire um plano e
                pode falar de graça até um determinado tempo (em minutos) e só
                paga os minutos excedentes economizando dinheiro e falando mais.
                Os minutos excedentes tem apenas um acréscimo de 10% sobre a
                tarifa normal do minuto. Os planos são FaleMais 30 (30 minutos),
                FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).
              </p>
            </div>
          </div>
        </section>

        <section className="container section-container">
          <div className="row">
            <div className="col-12 col-md-12 title-plano-table">
              <h2>Exemplo de Ligações Fale Mais/Normal </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive-xl">
                <table>
                  <thead>
                    <tr>
                      <th>Origem</th>
                      <th>Destino</th>
                      <th>Tempo</th>
                      <th>Plano FaleMais</th>
                      <th>Com FaleMais</th>
                      <th>Sem FaleMais</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>011</td>
                      <td>016</td>
                      <td>20</td>
                      <td>FaleMais 30</td>
                      <td>R$ 0,0</td>
                      <td>R$ 38,00</td>
                    </tr>

                    <tr>
                      <td>011</td>
                      <td>017</td>
                      <td>80</td>
                      <td>FaleMais 60</td>
                      <td>R$ 37,40</td>
                      <td>R$ 136,00</td>
                    </tr>

                    <tr>
                      <td>018</td>
                      <td>011</td>
                      <td>200</td>
                      <td>FaleMais 120</td>
                      <td>R$ 167,20</td>
                      <td>R$ 380,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-12">
              <Link
                to="/calculate"
                className="btn-introducao btn-calcule btn-calcule-help"
                role="button"
              >
                Calcule Aqui
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Informations;
