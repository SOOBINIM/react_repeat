import TodoComponent from "../components/TodoComponent";
import { useDispatch, useSelector } from "react-redux";
import { insert, remove } from "../modules/todo";

const TodoContainer = () => {
    const todos = useSelector(state => state.todoReducer.todos)
    const dispatch = useDispatch();

    return (
        <div>
            <TodoComponent
                todos={todos}
                onInsert={text => dispatch(insert(text))}
                onRemove={id => dispatch(remove(id))} />
        </div>
    )
}

export default TodoContainer;

