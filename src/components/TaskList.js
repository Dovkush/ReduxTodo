import React from 'react'
import { connect } from 'react-redux'

function TaskList(props) {
    return (
        <div>
            {props.todolist.map((task, idx) => {
                return (
                    <>
                        <div>{task}</div>
                        <button id={idx} onClick={(e) => {
                            props.deleteTask(e.target.id)
                        }}>Delete</button>
                    </>
                )
            })

            }
        </div>
    )
}
const mapStoreToProps = (store) => {
    console.log(store.Tasklist);
    return store.Tasklist;
}
const mapDispatchtoStore = (dispatch) => {
    return {
        deleteTask: (id) => {
            dispatch({ type: "delete_task", payload: id })
        }
    }
}
export default connect(mapStoreToProps, mapDispatchtoStore)(TaskList)
