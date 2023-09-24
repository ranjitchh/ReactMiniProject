import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setamount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount);
    setamount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="hero">
        <div className="heading_div">
          <h3>Always get the real exchange rate</h3>
          <p>support all countries currencies</p>
        </div>
        <div className="input_boxes">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              setFrom(currency);
            }}
            selectCurrency={from}
            onAmountChange={(amount)=>{
              setamount(amount)
            }}
            
          />
          <div className="convert">
            <button onClick={swap}>Swap</button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              setTo(currency)
            }}
            selectCurrency={to}
          />
          <div className="Calculate">
            <button onClick={convert}>Convert {from} to {to}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
