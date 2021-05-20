import  CurrencysListItem  from "./CurrencysListItem"

import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const CurrencysList = ({
    currencys,
    defaultValue,
}) => {
    return (
        <div>
            {currencys.map(({
                ccy,
                base_ccy,
                buy,
                sale
            },i) => (
                <CurrencysListItem
                    key={i}
                    ccy={ccy}
                    base_ccy={base_ccy}
                    buy={buy}
                    sale={sale}
                />
            ))}
            <Link to={`/currencys/${Object.keys(defaultValue.defaultValue)}`}>Next</Link>
            
        </div>
        
    )
}

const mapStateToProps = (state) => ({
    defaultValue:state
})

export default connect(
    mapStateToProps
)(CurrencysList)