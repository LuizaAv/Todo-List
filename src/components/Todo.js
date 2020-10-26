import React from "react"

const Todo = ({text, setTodos, todos, todo}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                //console.log(item.id)
                return {
                    ...item, completed: !item.completed
                }
            }
            return  item
        }))
    }
    return(
        <div  className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn" onClick={completeHandler}  >
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo