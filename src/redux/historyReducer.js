

const historyReducer = (state = [{
    "EUR":100,
    "UAH":3310,
    
}],action) => {
    switch(action.type) {
        case "ADD_CURRENCY":
            return [
                ...state,
                {
                    [action.ccy]:action.count,
                    [action.base_ccy]:action.total
                }
            ]

        default:
            return state
    }
};

export default historyReducer