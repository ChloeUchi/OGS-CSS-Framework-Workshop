import { useDispatch, useSelector } from "react-redux";
import {decrement,increment} from '../store/slice/counterSlice'
import { RootState } from "../store/store";
// import { Button } from "antd";

function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return(
        <div className="flex gap-10">
            <button
            className="hover:text-gray-200 active:text-gray-100 border-2 rounded-xl px-[0.2em] bg-slate-700"
            // className="px-[7em] py-[3em] flex justify-center place-items-center"
            aria-label="Increment value"
            // type="primary"
            onClick={() => dispatch(increment())}
            >Increment</button>
            <span>{ count }</span>
            <button
            className="hover:text-gray-200 active:text-gray-100 border-2 rounded-xl px-[0.2em] bg-slate-700"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            >Decrement</button>
        </div>
    )
}
export default Counter;