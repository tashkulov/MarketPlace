import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { counterActions, getCount } from "../../../entities/Counter";
import { Button } from "../../../shared/ui/Button/Button";

const Counter = () => {
    const count=useSelector(getCount);
    const dispatch=useDispatch();
     
    
    const increment=useCallback(()=>{
        dispatch(counterActions.increment());
    },[dispatch]);
    const decrement=useCallback(()=>{
        dispatch(counterActions.decrement());

    },[dispatch]);
    
    return (
        <div>
            <Button onClick={decrement}>-</Button>
            <span>{count}</span>
            <Button onClick={increment}>+</Button>
            
        </div>
    );
};

export default Counter;