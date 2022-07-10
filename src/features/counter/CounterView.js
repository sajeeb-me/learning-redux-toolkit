import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByValue, reset } from './counterSlice';

const CounterView = () => {

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
            <button onClick={() => { dispatch(reset()) }}>Reset</button>
            <button onClick={() => { dispatch(increment()) }}>Increment</button>
            <button onClick={() => { dispatch(incrementByValue(5)) }}>Increment by 5</button>
        </div>
    );
};

export default CounterView;