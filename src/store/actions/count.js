import Actions from "."
import axios from "axios";

export const incrementCount =  (count) => {
    return async (dispatch, getState) => {
        const countAsId = getState().count
        await axios.get(`https://jsonplaceholder.typicode.com/todos/${countAsId}`).then((res) => {
            console.log("Data", res.data)
        })
        dispatch({
            type: Actions.incrementCount,
            payload: count
        })
    }
}

export const decrementCount = (payload) => {
    return {
        type: Actions.decreamentCount,
        payload
    }
}

