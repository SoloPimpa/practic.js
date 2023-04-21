import React from "react";

function HelloUser(props) {
    if (props.name === "") {
        return <p>Ошибка</p>
    } else {
        return <p>Привет, <strong>{props.name}</strong></p>
    }
}

export default HelloUser;