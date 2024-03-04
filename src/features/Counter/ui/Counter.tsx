import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { counterActions, getCount } from "../../../entities/Counter";
import { Button } from "../../../shared/ui/Button/Button";

<<<<<<< HEAD

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(getCount);

    const decrement = useCallback(() => {
        dispatch(counterActions.decrement());
    }, [dispatch]);
    
    const increment = useCallback(() => {
        dispatch(counterActions.increment());
    }, [dispatch]);

    return (
        <div>
            <Button
                onClick={decrement}
            >
                -
            </Button>
            <span>{count}</span>
            <Button
                onClick={increment}
            >
                +
            </Button>
=======
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
            
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
        </div>
    );
};

export default Counter;