import React from "react";
import ReactDOM from "react-dom";

// importing data

import { tenHighestPopulation } from "./data/ten_most_highest_populations";
import css from "../src/index.module.css";

const Country = ({ population: { country, population } }) => {
  return (
    <ul>
      <li className={css.listEl}>
        {country}
        <p style={{ textTransform: "uppercase" }}>
          {population.toLocaleString()}
        </p>
      </li>
    </ul>
  );
};

const Countries = ({ populations }) => {
  const countryList = populations.map((population) => (
    <Country population={population} />
  ));
  return <div className={css.listWrapper}>{countryList}</div>;
};

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const Table = ({ numbers }) => {
  const list = numbers.map((number) => {
    const isPrimeNumber = isPrime(number);

    if (isPrimeNumber) {
      return (
        <li key={number} className={`${css.prime} ${css.listElement}`}>
          {number}
        </li>
      );
    }
    if (number % 2 === 0) {
      return (
        <li key={number} className={`${css.even} ${css.listElement}`}>
          {number}
        </li>
      );
    } else if (number % 2 !== 0) {
      return (
        <li key={number} className={`${css.odd} ${css.listElement}`}>
          {number}
        </li>
      );
    }
  });
  return <ul className={css.list}>{list}</ul>;
};

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <div className="app">
      <div>
        <h1 className={css.header}>World population</h1>
        <p className={css.paragraph}>Ten most populated countries</p>
        <Countries populations={tenHighestPopulation} />
      </div>
      <div>
        <h1 className={css.header}>Number Generator</h1>
        <Table numbers={numbers} />
      </div>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
