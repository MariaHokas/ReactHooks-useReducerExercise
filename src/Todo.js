import React from "module";
import { ACTIONS } from './RedCon';

export default function Todo({ todo, dispatch }) {
    return (
        <>

            <span style={{ color: todo.completed ? 'red' : 'black' }}>
                {todo.name}
            </span>
            <button onClick={() => dispatch({
                type: ACTIONS.TODO_TOGGLE,
                payload: { id: todo.id }
            })}>toggle</button>
            <button onClick={() => dispatch({ 
                type: ACTIONS.DELETE,
                payload: { id: todo.id }
            })}>delete</button>
            <br />
        </>
    )
}