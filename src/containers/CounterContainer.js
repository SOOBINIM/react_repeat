import CounterComponent from "../components/CounterComponent";
import { useSelector, useDispatch } from "react-redux";
import { increase_async, decrease_async } from "../modules/counter";
import { useCallback } from "react";


const CounterContainer = () => {
    const number = useSelector(state => state.counterReducer.number);
    const dispatch = useDispatch()

    const onIncrease = useCallback(() => { dispatch(increase_async()) }, [dispatch])
    const onDecrease = useCallback(() => { dispatch(decrease_async()) }, [dispatch])
    return (
        <CounterComponent number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    )
}

export default CounterContainer;

