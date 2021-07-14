let initialstate = {
    todolist: ["Task-1", "Task-2", "Task-3"],
}
function taskListReducer(state = initialstate, action) {
    switch (action.type) {
        case "delete_task": return {
            todolist: state.todolist.filter((task, idx) => {
                return idx != action.payload;
            })
        }
        case "add_task": return {
            todolist: [...state.todolist, action.payload],
        }
        default: return state;
    }
}
export default taskListReducer