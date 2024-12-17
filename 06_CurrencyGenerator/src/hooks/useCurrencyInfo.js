import { useEffect, useState } from "react";

// let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`



function useCurrencyInfo(currency){
    debugger;
    const [data, setData] = useState({})
    useEffect(() => {
        debugger;
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    debugger;
    console.log(data);
    return data
}

export default useCurrencyInfo;



