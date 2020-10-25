import React from "react"

const Form = ({inputText, setInputText, todos, setTodos}) => {
    const  inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const clickHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        //console.log(todos[0])
    }

    return(
        <form>
            <input type="text" className="todo-input"  onChange={inputTextHandler}/>
            <button className="todo-button"  type = "submit"  onClick= {clickHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select  className="filter-todo" name="todos">
                    <option  value="all">All</option>
                    <option  value="completed">Completed</option>
                    <option  value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form