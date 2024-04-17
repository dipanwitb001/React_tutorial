// userdefined hook
import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    useEffect(() =>{
        const[data, setData] = useState({})

        // api call with the currency value received as a prop
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        
        // as the response from api is usually received as string, hence it is being converted to json
        .then((res) => res.json())

        // in the previous step, the response is converted to json, here, holding the data in the useState variable so that it can be passed on to the UI
        .then((res) => setData(res[currency]))
        console.log(data)
    },
    // currency is set as the dependency i.e, any ca=hange in the currency value will call the function again
     [currency])

     console.log(data);
     return data;
}

// the method is returned
export default useCurrencyInfo;