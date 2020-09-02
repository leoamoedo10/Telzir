import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import "./styles.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createDataTableOne(origin, destiny, price) {
  return { origin, destiny, price };
}

const rowsTableOne = [
  createDataTableOne("011", "016", "1,90"),
  createDataTableOne("016", "011", "2,90"),
  createDataTableOne("011", "017", "1,70"),
  createDataTableOne("017", "011", "2,70"),
  createDataTableOne("011", "018", "0,90"),
  createDataTableOne("018", "011", "1,90"),
];

function createDataTableTwo(
  origin,
  destiny,
  time,
  planTalkPlus,
  priceWith,
  priceWithout
) {
  return { origin, destiny, time, planTalkPlus, priceWith, priceWithout };
}

const rowsTableTwo = [
  createDataTableTwo("011", "016", "20", "FaleMais 30", "R$ 0,0", "R$ 38,00"),
  createDataTableTwo(
    "011",
    "017",
    "80",
    "FaleMais 60",
    "R$ 37,40",
    "R$ 136,00"
  ),
  createDataTableTwo(
    "018",
    "011",
    "200",
    "FaleMais 120",
    "R$ 167,20",
    "R$ 380,00"
  ),
];

function Informations() {
  const classes = useStyles();

  return (
    <>
      <div>
        <PageHeader />
      </div>

      <div id="page-informations">
        <section className="section-container">
          <div className="title-section">
            <h2>Plano Normal</h2>
          </div>

          <div className="container-table">
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Origem (DDD)</TableCell>
                    <TableCell align="center">Destino (DDD)</TableCell>
                    <TableCell align="center">R$/Minuto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsTableOne.map((rowsTableOne) => (
                    <TableRow>
                      <TableCell align="center">
                        {rowsTableOne.origin}
                      </TableCell>
                      <TableCell align="center">
                        {rowsTableOne.destiny}
                      </TableCell>
                      <TableCell align="center">{rowsTableOne.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <div className="text-description">
              No plano normal da Telzir, o cliente pode fazer uma chamada de uma
              cidade para outra pagando uma tarifa fixa por minuto, com o preço
              sendo pré-definido em uma lista com os códigos DDDs de origem e
              destino.
            </div>
          </div>
        </section>

        <section className="section-container">
          <div className="title-section">
            <h2>Plano Fale Mais</h2>
          </div>

          <div className="text-description">
            <p>
              Com o Plano FaleMais da Telzir, o cliente adquire um plano e pode
              falar de graça até um determinado tempo (em minutos) e só paga os
              minutos excedentes economizando dinheiro e falando mais. Os
              minutos excedentes tem apenas um acréscimo de 10% sobre a tarifa
              normal do minuto. Os planos são FaleMais 30 (30 minutos), FaleMais
              60 (60 minutos) e FaleMais 120 (120 minutos).
            </p>
          </div>
        </section>

        <section className="container section-container">
          <div className="title-section">
            <h2>Comparação entre Planos</h2>
          </div>

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Origem</TableCell>
                  <TableCell align="center">Destino</TableCell>
                  <TableCell align="center">Tempo</TableCell>
                  <TableCell align="center">Plano FaleMais</TableCell>
                  <TableCell align="center">Com FaleMais</TableCell>
                  <TableCell align="center">Sem FaleMais</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsTableTwo.map((rowsTableTwo) => (
                  <TableRow key={rowsTableTwo.time}>
                    <TableCell align="center">{rowsTableTwo.origin}</TableCell>
                    <TableCell align="center">{rowsTableTwo.destiny}</TableCell>
                    <TableCell align="center">{rowsTableTwo.time}</TableCell>
                    <TableCell align="center">
                      {rowsTableTwo.planTalkPlus}
                    </TableCell>
                    <TableCell align="center">
                      {rowsTableTwo.priceWith}
                    </TableCell>
                    <TableCell align="center">
                      {rowsTableTwo.priceWithout}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="button">
            <Link to="/calculate" className="calculate">
              <PlayArrowIcon style={{ fontSize: 40 }} />
              Calcular
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Informations;
