import React from "react";
import {useHistory} from 'react-router-dom'

const Dropdown = ({ coinData, setValueChange }) => {

    const history = useHistory()
    const toCrypto = (event) => {
        // setCoin()
        setValueChange(event.target.value)
        history.push(`/${event.target.value}`)
    }
    // coinData.map(coin => (
    //     console.log(coin)
    // ));
    return (
        <form>
            <select onChange={toCrypto}>
                <option></option>
            {coinData.map(coin => (
                <option key={coin.symbol}>{coin.symbol.toUpperCase()}</option>
            ))}
            
            </select>
            
        </form>
  );
};
export default Dropdown;
