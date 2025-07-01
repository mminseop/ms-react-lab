import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import Animal from "./pages/animal";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="page-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<TodoList />} />
                    <Route path="/animal/*" element={<Animal />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
