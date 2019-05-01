import React from 'react';
import './Input.css';


const Input = props => {
    return (
        <div >
            <input
                className={props.className}
                id={props.name}
                name={props.name}
                type={props.inputType}
                value={props.value}
                onChange={props.handleChange}
            />
        </div>
    );
}

export default Input;