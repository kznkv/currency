
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import { connect } from 'react-redux';

const CurrencysListItem = ({
    ccy,
    base_ccy,
    buy,
    sale,
    isDefault = false,
    changeDefaultValue
}) => {
    return (
        <div style={{
            display:"flex",
            alignItems:"center",
            margin:"10px"
        }}>
            <button onClick={() => changeDefaultValue() }>
                {isDefault ? <StarIcon /> : <StarOutlineIcon/> }
            </button>

            <div style={{marginLeft:"10px"}}>
                {ccy} : {base_ccy} : {buy} : {sale}
            </div>
            
        </div>
    )
}

const mapStateToProps = (state,{ccy}) => ({
    isDefault:state.defaultValue[ccy]
})

const mapDispatchToProps = (dispatch,{ccy}) => ({
    changeDefaultValue:() => dispatch({
        type:"CHANGE_DEFAULT_VALUE",
        ccy
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencysListItem)