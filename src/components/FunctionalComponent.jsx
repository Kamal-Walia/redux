import { useSelector, useDispatch } from "react-redux";
import {incrementCount} from "../store/actions/count";
import axios from "axios";

import { useEffect } from "react";

const FunctionalComponent = () => {
    const count = useSelector((state) => {
        return state.count
    })
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(incrementCount(10))
        // fetch('https://dummy.restapiexample.com/api/v1/create', {method:'post', body:JSON.stringify({
        //   salary:"123",
        //   age:"23"
        // })}).then((res) => res.json().then((jsonResponse) => {
        //     console.log('jsonResponse', jsonResponse)
        // })).catch(err => {
        //     console.log('Error', err)
        // })

        // fetch('https://dummy.restapiexample.com/api/v1/employees').then((res) => res.json().then((jsonResponse) => {
        //     console.log('jsonResponse', jsonResponse)
        // })).catch(err => {
        //     console.log('Error', err)
        // })

        axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
            console.log("Data",res.data )
        })

        axios.post('https://dummy.restapiexample.com/api/v1/create', {salary:"123",
          age:"23"}).then((res) => {
            console.log("Data",res.data )
        })
       
    }, [])


    
    return (
        <div>Count in functional component {count}
        <button onClick={() => dispatch(incrementCount(count+10))}>Add 10</button>
        </div>
    )
}

export default FunctionalComponent