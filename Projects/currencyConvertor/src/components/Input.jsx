import React,{useId} from 'react'

function InputBox({
    label, //mention from or to
    amount, // amount to be converted
    onAmountChange, //a methos(to be discussed later)
    onCurrencyChange, //on change of the options(i.e if the selected currency is changed)
    currencyOption=[], //list of currency options is returned in the form of array
    selectCurrency="usd" , //a default currency is provided
    amountDisable = false,
    currencyDisable = false,
    className="" //if any user choice css is provided
}) {
    const amountInputId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label htmlFor={amountInputId}
            className='text-black/40 mb-2 inline-block'>
                {label}
            </label>
            <input 
            id='amountInputId'
            className='outline-none w-full bg-transparent py-1.5'
            type="number"
            placeholder='Amount'
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

            // here, && is given to check is any value is given to onAmountChange, if yes then the func will be run

            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>
            <select 
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
            >

            {currencyOption.map((currency) => (
                <option key={currency} 
                value={currency}>
                {currency}
                </option>
            ))}
            

            </select>
        </div>
    </div>
  )
}

export default InputBox;
