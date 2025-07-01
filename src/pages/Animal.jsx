import { useState } from "react";
import { Route, Routes } from "react-router";
import AnimalMain from "./AnimalMain.jsx";
import AnimalDetail from "./AnimalDetail.jsx";
import AnimalSearch from "./AnimalSearch.jsx";
import "../styles/Animal.css";

function Animal() {

    return (
        <>
            <div className="animal-title">
                <h1>💚 동물 뽑기 💚</h1>
            </div>
            <Routes>
                <Route path="./" element={<AnimalMain />} />
                <Route path="./detail" element={<AnimalDetail />} />
                <Route path="./search" element={<AnimalSearch />} />
            </Routes>
            <footer>all rights reserved to ms</footer>
        </>
    );
}

export default Animal;
