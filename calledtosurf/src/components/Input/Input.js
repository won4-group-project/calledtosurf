import React from 'react';
import './Input.css';


function Input(props) {
    return(
        <div >
            <input 
            className={props.className}
            id={props.name}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.handleChange}
            />
        </div>
    );
}

export default Input;