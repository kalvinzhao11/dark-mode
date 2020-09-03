import React, {useEffect} from "react";
import {useParams} from 'react-router-dom'
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const CryptoChart = ({coinData, setCoin, coin, valueChange}) => {
    const symbol  = useParams()
    // coin = coinData[1]
    useEffect(() => {
        setCoin(coinData.find(coin=>{
            return coin.symbol.toUpperCase() === symbol.coinName
        },[valueChange]))
        console.log(coin)
    })
    
    if (coin) {
        const sparklineData=coin.sparkline_in_7d.price
        const formattedData = sparklineData
        .map((price, idx) => {
            if (idx % 6 === 0) {
                const timeToSubtract = 168 - idx;
                const date = moment()
                .subtract(timeToSubtract, "hours")
                .format("ddd h:mma");
                return { value: price, date };
            } else if (idx === sparklineData.length - 1) {
                const date = moment().format("ddd h:mma");
                return { value: price, date };
            }
            return null;
        })
        .filter(data => data);

        return (

            <div className="charts">
                <div className="chart__container" key={coin.name}>
                    <h2 className="coin__title">{coin.name}</h2>
                    <h4 className="coin__symbol">{coin.symbol}</h4>
                    <div className="coin__logo">
                        <img src={coin.image} height="40" alt={coin.name} />
                    </div>
                    <LineChart width={1100} height={300} data={formattedData}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="date" interval={3} />
                    <YAxis />
                    <Tooltip />
                    </LineChart>
                </div>
          </div>

        )
    }
    // const sparklineData=coin.sparkline_in_7d.price
    // const formattedData = sparklineData
    // .map((price, idx) => {
    //     if (idx % 6 === 0) {
    //         const timeToSubtract = 168 - idx;
    //         const date = moment()
    //         .subtract(timeToSubtract, "hours")
    //         .format("ddd h:mma");
    //         return { value: price, date };
    //     } else if (idx === sparklineData.length - 1) {
    //         const date = moment().format("ddd h:mma");
    //         return { value: price, date };
    //     }
    //     return null;
    // })
    // .filter(data => data);

    return (
        <div></div>
        // <LineChart width={1100} height={300} data={formattedData}>
        //   <Line type="monotone" dataKey="value" stroke="#8884d8" />
        //   <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        //   <XAxis dataKey="date" interval={3} />
        //   <YAxis />
        //   <Tooltip />
        // </LineChart>
    );
};

export default CryptoChart;
