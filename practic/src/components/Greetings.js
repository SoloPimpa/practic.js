import {useState} from "react";
import HelloUser from "./HelloUser";

function Greetings(props) {
    const startName = props.name || "";
    const [name, setName] = useState(startName);

    function changeInput(e){
        setName(e.target.value)
    }

    return (
        <div>
            <form>
                Имя: &nbsp;&nbsp;
                <label htmlFor="name">
                    <input id="name" onInput={changeInput}/>
                </label>
                <HelloUser name={name}/>
            </form>
        </div>
    );
}

export default Greetings;
