import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import {useDarkMode} from './hooks/UseDarkMode'
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom'
import Dropdown from './components/Dropdown'

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkmode] = useDarkMode("Dark Mode", false);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={darkmode ? "dark-mode App" : "App"}>
      <Navbar />
      <Dropdown coinData={coinData}/>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
