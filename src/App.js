import {useDispatch, useSelector} from 'react-redux';
import React from 'react';

const App = (props)=>{

    const counter  = useSelector( (state)=>state.counter );
    const dispatch = useDispatch();

    return (

        <>
        {counter}
        <button onClick={()=>{dispatch({type:'INCREMENT'})}}>+</button>
        <button>-</button>
        </>


    )


}

export default App;
