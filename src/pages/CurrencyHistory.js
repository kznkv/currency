import { connect } from "react-redux"
import "./CurrencyHistory.css"

const CurrencyHistory = ({
    history
}) => {
    

    console.log(history)
    return(
        <div>
            <h1>History</h1>
            <div className="history-item">
                {
                    history.map((item,i) => {
                        // const 

                        return (
                            <div key={i}>
                                {Object.keys(item).map((el,j) => (
                                    <div key={j}>{el} : {item[el]} </div>
                                ))}
                            </div>
                        )
                        
                    }
                        
                )}
            </div>
            
        </div>
    )
}

const mapStateToProps = (state,props) => ({
    history:state.history
})

export default connect(
    mapStateToProps
)(CurrencyHistory)
