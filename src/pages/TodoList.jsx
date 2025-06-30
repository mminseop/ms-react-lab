import { useState } from "react";
import "../styles/TodoList.css";

function TodoList() {
    const [todo, setTodo] = useState([
        { id: 0, content: "데이터1" },
        { id: 1, content: "데이터2" },
    ]);

    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <div className="todo-container">
                <TodoListHeader />
                <TodoListItems todo={todo} />
                <TodoInput todo={todo}/>
            </div>
        </>
    );
}

function TodoListHeader() {
    return <h1>📝 Todo List</h1>;
}

function TodoListItems({ todo }) {
    return (
        <div className="todo-list">
            {todo.map((x) => {
                return (
                    <div key={x.id} className="todo-item">
                        {x.content}
                        <div className="btn-wrap">
                            <button>수정</button>
                            <button>삭제</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function TodoInput({todo}) {
    return (
        <div className="input-section">
            <input
                type="text"
                placeholder="할 일을 입력하세요"
                value = {inputValue}
                onChange={(e) => {setInputValue(e.target.value)}}
            />
            <button>추가</button>
        </div>
    );
}


export default TodoList;