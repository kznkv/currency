import axios from "axios"
import { useEffect, useState } from "react"
import { Route } from "react-router"
import { Link } from "react-router-dom"
import  CurrencysList  from "./CurrencysList/CurrencysList"
import CurrencyHistory from "./pages/CurrencyHistory"
import ExchangePage from "./pages/ExchangePage"
import HomePage from "./pages/HomePage"


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
            <Route path="/" exact render={() => <HomePage currencys={currencys}/>}/>
            <Route path="/change" exact render={() => <CurrencysList currencysObj={currencysObj} currencys={currencys}/>}/>
            <Route path="/currencys/:ccy" exact render={({match}) => <ExchangePage match={match} currencysObj={currencysObj}/>} />
            <Route path="/history" exact component={CurrencyHistory}/>
            <div>
                <Link to="/change">Choose currency</Link>
            </div>
            <Link to="/">Link to Home page</Link>
        </>
    )
}