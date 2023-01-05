import TodoComponent from "../components/TodoComponent";
import { useDispatch, useSelector } from "react-redux";
import { insert, remove, editdone } from "../modules/todo";
import { editmode_async } from "../modules/todo";
import { useCallback } from "react";

const TodoContainer = () => {
    const todos = useSelector(state => state.todoReducer.todos)

    const dispatch = useDispatch();

    // 컴포넌트가 리렌더링될 떄 마다 함수가 새롭게 만들어지고 있는데
    // 컴포넌트 성능 최적화를 위해 useCallback으로 액션을 디스패치하는 함수를 감싸준다.
    // 변경된 참조로 인해 자식 컴포넌트가 불필요하게 렌더링될 수 있기 때문
    const onInsert = useCallback((todoID, text) => (dispatch(insert(todoID, text))), [dispatch])
    // const onRemove = useCallback((index) => (dispatch(remove(index))), [dispatch])

    return (
        <div>
            <TodoComponent
                todos={todos}
                onInsert={onInsert}
                onRemove={(id) => dispatch(remove(id))}
                // onRemove={onRemove}
                onEditmode={index => dispatch(editmode_async(index))}
                onEditDone={(index, text) => dispatch(editdone(index, text))} />
        </div>
    )
}

export default TodoContainer;

