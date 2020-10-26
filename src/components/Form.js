import React from "react"

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    const  inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const clickHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText("")
        //console.log(todos[0])
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return(
        <form>
            <input type="text" className="todo-input"  onChange={inputTextHandler} value = {inputText}/>
            <button className="todo-button"  type = "submit"  onClick= {clickHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} className="filter-todo" name="todos">
                    <option  value="all">All</option>
                    <option  value="completed">Completed</option>
                    <option  value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form