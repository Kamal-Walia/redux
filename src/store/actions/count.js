import Actions from "."

export const incrementCount = (count) => {
    return {
        type: Actions.incrementCount,
        payload: count
    }
}

export const decrementCount = (payload) => {
    return {
        type: Actions.decreamentCount,
        payload
    }
}

