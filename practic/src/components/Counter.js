import React, {useState} from "react";
function Counter(props) {
    const startValue = props.startValue || 0;
    const [count, setCount]= useState(startValue);

    function plus(){
       setCount(count +1)
    }
    function man(){
        setCount(count -1)
    }

    return (
        <div>
            &nbsp;&nbsp;<button onClick={plus}>+</button>
            &nbsp;&nbsp;<span>{count}</span>
            &nbsp;&nbsp;<button onClick={man}>-</button>
        </div>
    );
}

export default Counter;