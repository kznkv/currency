import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";


const ExchangePage = ({
    match,
    currencysObj,
    addCurrency,
}) => {
    const currency = match.params.ccy;

    const [count,setCount] = useState({
        count:1
    })

    const history = useHistory()

    const handleCount = (e) => {
        setCount(value => ({
            ...value,
            count:e.target.value
        }))
    }

    const onSend = (e) => {
        e.preventDefault();
        let path = `/history`; 
        history.push(path);


    }

  
    if(Object.keys(currencysObj).length===0) {
        return null
    } else {

   
    return (
        <>  
            <div>Currency Exchange {currency} to UAH</div>
            <div>{currencysObj[currency].ccy} : {currencysObj[currency].base_ccy} : {currencysObj[currency].buy} :{currencysObj[currency].sale}</div>
            <form onSubmit={onSend}>
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
                <button onClick={() => addCurrency(currency,count,currencysObj)}>Change</button>
            </form>
            


        </>
    ) }
}


const mapDispatchToProps = (dispatch) => ({
    addCurrency:(currency,count,currencysObj) => dispatch({
        type: 'ADD_CURRENCY',
        ccy:currencysObj[currency].ccy,
        count:count.count,
        base_ccy:currencysObj[currency].base_ccy,
        total:count.count*currencysObj[currency].buy
    })
})

export default connect(
    null,
    mapDispatchToProps
) (ExchangePage)