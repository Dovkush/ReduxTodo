import React, { useState } from 'react'
import { connect } from 'react-redux';
function NewTask(props) {
    const [task, setTask] = useState("");
    return (
        <div>
            <input type="text" onChange={(e) => { setTask(e.target.value) }} value={task}></input>
            <button onClick={() => {
                props.addTask(task)
                setTask("")
            }
            }>Submit</button>
        </div>
    )
}
const mapStoreToProps = (store) => {
    console.log(store.Tasklist);
    return store.Tasklist;
}
const mapDispatchtoStore = (dispatch) => {
    return {
        addTask: (task) => {
            dispatch({ type: "add_task", payload: task })
        }
    }
}
export default connect(mapStoreToProps, mapDispatchtoStore)(NewTask);
