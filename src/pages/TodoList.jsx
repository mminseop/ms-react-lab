import { useState } from "react";
import "../styles/TodoList.css";

function TodoList() {
    const [todo, setTodo] = useState([
        { id: 0, content: "데이터1" },
        { id: 1, content: "데이터2" },
    ]);

    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <div className="todo-container">
                <TodoListHeader />
                <TodoListItems todo={todo} setTodo={setTodo} />
                <TodoInput
                    todo={todo}
                    setTodo={setTodo}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
            </div>
        </>
    );
}

function TodoListHeader() {
    return <h1>📝 Todo List</h1>;
}

function TodoListItems({ todo, setTodo }) {
    const handleDel = (id) => {
        const newTodo = todo.filter((x) => {
            return x.id !== id;
        })
        setTodo(newTodo);
    }
    return (
        <div className="todo-list">
            {todo.map((x) => {
                return (
                    <div key={x.id} className="todo-item-wrap">
                        <input
                            name="todo-name"
                            className="todo-item"
                            value={x.content}
                            onChange={(e) => {
                                setTodo((e) => {
                                    console.log(e.target);
                                })
                            }}
                        />
                        <div className="btn-wrap">
                            <button>수정</button>
                            <button onClick={() => handleDel(x.id)}>삭제</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function TodoInput({ todo, setTodo, inputValue, setInputValue }) {
    const handleAdd = () => {
        const newTodo = {
            // id: todo.length ? todo[todo.length - 1].id + 1 : 0,
            id: Date.now(),
            content: inputValue,
        };
        setTodo([...todo, newTodo]);
        setInputValue("");
    };
    return (
        <div className="input-section">
            <input
                type="text"
                placeholder="할 일을 입력하세요"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <button onClick={handleAdd}>추가</button>
        </div>
    );
}

export default TodoList;
