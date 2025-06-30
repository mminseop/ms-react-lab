import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="page-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<TodoList />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
