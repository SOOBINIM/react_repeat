import { useCallback, useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom";

const TodoComponent = ({ todos, onInsert, onRemove, onEditmode, onEditDone }) => {
    const [text, setText] = useState({
        TodoInsert: "",
        TodoEdit: "",
    })

    const editInput = useRef(null);

    const onSubmit = e => {
        e.preventDefault();
        const savedTodos = localStorage.getItem('todoList')
        let todoID = Object.keys(JSON.parse(savedTodos)).length - 1
        onInsert(todoID, text.TodoInsert)
        setText("");
    }

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todos))
    }, [todos])

    const onChange = useCallback(e => {
        setText({ [e.target.name]: e.target.value });
    }, [])

    // componentDidUpdate
    useEffect(() => {
        if (editInput.current) {
            editInput.current.focus();
        }
    }, [onEditmode])

    return (
        <div className="todoList">
            <h1>투두 리스트</h1>
            <form onSubmit={onSubmit}>
                <input name="TodoInsert" value={text.TodoInsert || ''} onChange={onChange} placeholder="할 일을 입력하세요" />
                <button type="submit">등록</button>
            </form>
            {todos.map((todo, index) => (
                <div className="todoItem" key={index}>
                    {todo.editMode ?
                        <>
                            <input name="TodoEdit" onChange={onChange} ref={editInput} defaultValue={todo.text} readOnly={false} />
                            <button onClick={() => onEditDone(index, text.TodoEdit)}>완료</button>
                        </>
                        :
                        <>
                            <input defaultValue={todo.text} readOnly={true} />
                            <button onClick={() => onEditmode(index)}>수정</button>
                        </>
                    }

                    <button onClick={() => onRemove(todo.id)}>삭제</button>
                    <span>키 : {index}</span>
                </div>
            )
            )}
            <Link to="/counter">카운터</Link>
        </div>

    )
}

export default TodoComponent;

