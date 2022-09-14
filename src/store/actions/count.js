import Actions from "."

export const incrementCount = (payload) => {
    return {
        type: Actions.incrementCount,
        payload
    }
}

export const decrementCount = (payload) => {
    return {
        type: Actions.decreamentCount,
        payload
    }
}

