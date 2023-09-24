import "./inputBox.css";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
}) {
  console.log(currencyOptions);
  return (
    <>
      <div className="inputBox_div">
        <div className="country_select">
          <span>{label}</span>
          <select
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((currency)=>(
              <option value={currency} key={currency}>
                 {currency}           
              </option>
            ))}

            </select>
        </div>
        <div className="currency_rate">
          <input
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default InputBox;
