
export const defaultValue = (state = {
    "USD":true,
},action) => {
    switch(action.type) {
        case "CHANGE_DEFAULT_VALUE":
            return {
                [action.ccy]:true
            }
        
            default:
            return state
    }
}