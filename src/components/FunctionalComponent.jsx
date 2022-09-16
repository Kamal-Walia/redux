import { useSelector, useDispatch } from "react-redux";
import {incrementCount} from "../store/actions/count";

import { useEffect } from "react";

const FunctionalComponent = () => {
    const count = useSelector((state) => {
        return state.count
    })
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(incrementCount(10))
    }, [])
    
    return (
        <div>Count in functional component {count}
        <button onClick={() => dispatch(incrementCount(count+10))}>Add 10</button>
        </div>
    )
}

export default FunctionalComponent