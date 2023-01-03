import { createAction, handleActions } from "redux-actions";

const INSERT = 'todo/INSERT';
const REMOVE = 'todo/REMOVE';

let id = 3;
export const insert = createAction(INSERT, text => ({ id: id++, text, done: false, editmode: false }));
// export const insert = text => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false,
//         editMode: false
//     }
// });

export const remove = createAction(REMOVE, id => id);

const initialState = {
    todos: [
        {
            id: 1,
            text: '투두리스트 리덕스 적용',
            editMode: false,
            done: true
        },
        {
            id: 2,
            text: '투두리스트 리덕스 사가 적용',
            editMode: false,
            done: false
        }
    ]
}

const todoReducer = handleActions({
    // action.payload === action.todo
    [INSERT]: (state, action) => ({ ...state, todos: state.todos.concat(action.payload) }),
    // action.payload === action.id
    [REMOVE]: (state, action) => ({ ...state, todos: state.todos.filter(todo => todo.id !== action.payload) })
}, initialState)

export default todoReducer