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

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import "./styles.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
});

function createData(origin, destiny, time, planTalkPlus, priceWith, priceWithout) {
  return { origin, destiny, time, planTalkPlus, priceWith, priceWithout};
}

const rows = [
  createData('011', '016', '20', 'FaleMais 30', 'R$ 0,0', 'R$ 38,00' ),
  createData('011', '017', '80', 'FaleMais 60', 'R$ 37,40', 'R$ 136,00' ),
  createData('018', '011', '200', 'FaleMais 120', 'R$ 167,20', 'R$ 380,00' ),
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
          <h2>Plano Normal</h2>

          <div className="container-table">
            <table>
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

            <div className="text-description">
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
            <div className="text-description">
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
          <div className="title-plano-table">
            <h2>Comparações: Fale Mais/Normal </h2>
          </div>

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> Origem </TableCell>
                  <TableCell align="right">Destino</TableCell>
                  <TableCell align="right">Tempo</TableCell>
                  <TableCell align="right">Plano FaleMais</TableCell>
                  <TableCell align="right">Com FaleMais</TableCell>
                  <TableCell align="right">Sem FaleMais</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.origin}>
                    <TableCell component="th" scope="row">
                      {row.origin}
                    </TableCell>
                    <TableCell align="right">{row.destiny}</TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                    <TableCell align="right">{row.planTalkPlus}</TableCell>
                    <TableCell align="right">{row.priceWith}</TableCell>
                    <TableCell align="right">{row.priceWithout}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="button">
            <Link to="/calculate" className="calculate">
              <PlayArrowIcon style={{fontSize: 40}}/>
              Calcular
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Informations;
