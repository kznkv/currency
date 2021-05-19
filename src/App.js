import axios from "axios"
import { useEffect, useState } from "react"
import { Route } from "react-router"
import { Link } from "react-router-dom"
import  CurrencysList  from "./CurrencysList/CurrencysList"
import ExchangePage from "./pages/ExchangePage"


export const App = () => {

    const [currencys,setCurrencys] = useState([])

    const currencysObj = currencys.reduce((map,item) => ({
        ...map,
        [item.ccy]:item
    }),{})

    useEffect(() => {
        axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
        .then(res => res.data)
        .then(data => setCurrencys(data))
    },[])
    return (
        <>  
            {console.log(currencys)}
            <h1>Currency Exchange App</h1>
            <Route path="/" exact render={() => <CurrencysList currencys={currencys}/>}/>
            <Route path="/:ccy" render={({match}) => <ExchangePage match={match} currencysObj={currencysObj}/>} />
            <Link to="/">Link to Home page</Link>
        </>
    )
}