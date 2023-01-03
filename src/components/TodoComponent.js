import { useCallback, useState } from "react"

const TodoComponent = ({ todos, onInsert, onRemove }) => {
    const [text, setText] = useState({
        TodoInsert: ""
    })

    const onSubmit = e => {
        e.preventDefault();
        onInsert(text.TodoInsert)
        setText("");
    }

    const onChange = useCallback(e => {
        setText({ [e.target.name]: e.target.value });
    }, [])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="TodoInsert" value={text.TodoInsert || ''} onChange={onChange} placeholder="할 일을 입력하세요" />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}
                        <button onClick={() => onRemove(todo.id)}>삭제</button></li>

                )
                )}
            </div>
        </div>
    )
}

export default TodoComponent;

