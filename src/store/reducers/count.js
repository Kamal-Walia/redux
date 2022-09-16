import Actions from "../actions"

const initialState = {
    count:0,
}

const countReducer = (state = initialState, action) => {
    switch(action.type){
        case Actions.incrementCount: {
            return {count:action.payload}
        }
        case Actions.decreamentCount: {
            return {count:action.payload}
        }
        default: return state
    }
}

export default countReducer;