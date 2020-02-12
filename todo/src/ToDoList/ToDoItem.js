import React from 'react';

const ToDOItem = (props) => {
    const resolveClass = {
        textDecoration: 'line-through'
    }
    return (
        <div className="todo-item">
            <div className="descripton-wrapper">
                <p style={props.completed == true ? resolveClass : {}}>{props.descripton}</p>
            </div>
            <div className="input-wrapper">
                <input type="checkbox" defaultChecked={props.completed} onChange={props.handleChange}/>
            </div>
        </div>
    )
}

export default ToDOItem;