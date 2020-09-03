import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import {useDarkMode} from './hooks/UseDarkMode'
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import CryptoChart from './components/CryptoChart'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dropdown from './components/Dropdown'

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkmode] = useDarkMode("Dark Mode", false);
  const [coin, setCoin] = useState('')
  const [valueChange, setValueChange] = useState()
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
      <Dropdown coinData={coinData} setValueChange={setValueChange}/>

      <Switch>
        <Route path='/:coinName'>
          <CryptoChart coinData={coinData} setCoin={setCoin} coin={coin} valueChange={valueChange}/>
        </Route>
        <Route path='/'>
          <Charts coinData={coinData} />
        </Route>
      </Switch>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
