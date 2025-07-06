import { useState } from "react";
import "../styles/TodoList.css";

function TodoList() {
    const [todo, setTodo] = useState([
        { id: 0, content: "데이터1" },
        { id: 1, content: "데이터2" },
        { id: 2, content: "데이터3" },
    ]);

    return (
        <>
            <div className="todo-list-container">
                <TodoListHeader />
                <TodoListRows todo={todo} setTodo={setTodo} />
                <TodoListInput todo={todo} setTodo={setTodo} />
            </div>
        </>
    );
}

function TodoListHeader() {
    return <h1>TodoList</h1>;
}

function TodoListRows({ todo, setTodo }) {
    return (
        <div className="todo-list-wrap">
            {todo.map((row) => {
                return (
                    <GetTodoList
                        key={`todo-list-${row.id}`}
                        todo={todo}
                        setTodo={setTodo}
                        row={row}
                    />
                );
            })}
        </div>
    );
}

function GetTodoList({ row, todo, setTodo }) {
    const [isModify, setIsModify] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleDeleteList = (id) => {
        setTodo(todo.filter((x) => x.id !== id));
    };

    const handleModifyClick = () => {
        setInputValue(row.content);
        setIsModify(!isModify);
    };

    const handleCancelClick = () => {
        setIsModify(!isModify);
    };

    const handleSaveClick = () => {
        setTodo((prev) =>
            prev.map((item) =>
                item.id === row.id ? { ...item, content: inputValue } : item
            )
        );
        setIsModify(false);
    };

    return !isModify ? (
        <div className="todo-list-row">
            <div className="todo-list-item">
                <input className="todo-checkbox" type="checkbox" />
                <div className="todo-list-content">{row.content}</div>
            </div>
            <div className="todo-list-item">
                <button className="modify-btn" onClick={handleModifyClick}>
                    수정
                </button>
                <button
                    className="delete-btn"
                    onClick={() => handleDeleteList(row.id)}
                >
                    삭제
                </button>
            </div>
        </div>
    ) : (
        <div className="todo-list-row">
            <div className="todo-list-item">
                <input
                    type="text"
                    className="modify-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <div className="todo-list-item">
                <button className="modify-btn" onClick={handleCancelClick}>
                    취소
                </button>
                <button className="delete-btn" onClick={handleSaveClick}>
                    저장
                </button>
            </div>
        </div>
    );
}

function TodoListInput({ todo, setTodo }) {
    const [inputValue, setInputValue] = useState("");

    const handleAddList = () => {
        if (!inputValue.trim()) return; // 빈 입력 방지
        const newTodo = {
            id: Date.now(),
            content: inputValue,
        };
        const newTodoList = [...todo, newTodo];
        setTodo(newTodoList);
        setInputValue("");
    };

    return (
        <>
            <div className="todo-add-wrap">
                <input
                    value={inputValue}
                    placeholder="할 일을 입력하세요"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleAddList}>추가하기</button>
            </div>
        </>
    );
}
export default TodoList;
