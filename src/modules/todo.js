import { createAction, handleActions } from "redux-actions";
import { delay, put, takeLatest } from 'redux-saga/effects'

const INSERT = 'todo/INSERT';
const REMOVE = 'todos/REMOVE';
const EDITMODE = 'todo/EDITMODE';
const EDITDONE = 'todo/EDITDONE';

const EDITMODE_ASNYC = 'todo/EDITMODE_ASNYC';

const savedTodos = localStorage.getItem('todoList')
// if (savedTodos) {
//     let todoID = Object.keys(JSON.parse(savedTodos)).length

// }
// const EDITMODE_ASNYC_FAILED = 'todo/EDITMODE_ASNYC_FAILED'

// export const insert = text => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false,
//         editMode: false
//     }
// });
export const insert = createAction(INSERT, (todoID, text) => ({ id: todoID, text, done: false, editMode: false }));
export const remove = createAction(REMOVE, id => id);
export const editmode = createAction(EDITMODE, index => index);
export const editdone = createAction(EDITDONE, (index, text) => ({ index, text }));


export const editmode_async = createAction(EDITMODE_ASNYC, index => index)

function* editmodeSaga(action) {
    try {
        yield delay(1000);
        yield put(editmode(action.payload))
    } catch (e) {
        console.log(e)
        // yield put(EDITMODE_ASNYC_FAILED(e))
    }
}

export function* todoSaga() {
    yield takeLatest(EDITMODE_ASNYC, editmodeSaga)
}

const initialState = {
    todos:
        savedTodos ?
            JSON.parse(savedTodos) :
            [
                {
                    id: 1,
                    text: '투두리스트 리덕스 적용',
                    editMode: false,
                }
            ],
};

const todoReducer = handleActions({

    // action.payload === action.todo
    [INSERT]: (state, action) => ({ ...state, todos: state.todos.concat(action.payload) }),
    [REMOVE]: (state, action) => ({ ...state, todos: state.todos.filter(todo => todo.id !== action.payload), }),
    [EDITMODE]: (state, action) => ({ ...state, todos: state.todos.map((todo, index) => index === action.payload ? { ...todo, editMode: !todo.editMode } : todo,) }),
    [EDITDONE]: (state, action) => ({ ...state, todos: state.todos.map((todo, index) => index === action.payload.index ? { ...todo, text: action.payload.text, editMode: !todo.editMode } : todo,) }),
}, initialState)

export default todoReducer


// 1,2,3,4,5,6,5,> 2