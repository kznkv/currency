import { connect } from "react-redux"


const HomePage = ({
    currencys,
    initialValue
}) => {
    if(currencys.length===0) {
        return null
    } else {
        console.log(initialValue)

        const ccyValue = Object.keys(initialValue.defaultValue).join();
        
        return (
            <>
                <h1>Home page</h1>
                <div>
                    {currencys.filter(item => item.ccy === ccyValue).map(item => (<div>
                        {item.ccy} : {item.base_ccy} : {item.buy} : {item.sale}
                    </div>))}
                </div>
            </>
    )}
}

const mapStateToProps = (state) => ({
    initialValue:state
})

export default connect(
    mapStateToProps

)(HomePage)