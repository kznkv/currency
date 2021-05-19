import { useState } from "react";


const ExchangePage = ({
    match,
    currencysObj
}) => {
    const currency = match.params.ccy;
    console.log(currency)
    console.log(currencysObj)

    const [count,setCount] = useState({
        count:1
    })

    const handleCount = (e) => {
        setCount(value => ({
            ...value,
            count:e.target.value
        }))
    }
    if(Object.keys(currencysObj).length===0) {
        return null
    } else {

   
    return (
        <>  
            <div>Currency Exchange {currency} to UAH</div>
            <div>{currencysObj[currency].ccy} : {currencysObj[currency].base_ccy} : {currencysObj[currency].buy} :{currencysObj[currency].sale}</div>
            <div>
                <input 
                    type="text"
                    value={count.count} 
                    onChange={handleCount}
                    placeholder={currency} />
            </div>
            <div>
                <input 
                    type="text" 
                    readOnly
                    value={count.count*currencysObj[currency].buy} 
                    placeholder={currencysObj[currency].base_ccy} />
            </div>

        </>
    ) }
}

export default ExchangePage