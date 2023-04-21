import React from "react";

function TextInput(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input type='text' value={props.value} onChange={props.onChange} placeholder={props.placeholder} /><br />
        </div>
    );
}

export default TextInput;