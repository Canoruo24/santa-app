import React from 'react';

const Input = ({gifts, state, name}, onChange) => {
    return (
        <div key={name} className="input">
            <input name={name} value={state} onChange={onChange}/>
            <label>{gifts}</label>
        </div>
    )
}

export default Input;