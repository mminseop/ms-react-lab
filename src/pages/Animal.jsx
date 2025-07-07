import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import AnimalMain from "./AnimalMain.jsx";
import AnimalDetail from "./AnimalDetail.jsx";
import AnimalSearch from "./AnimalSearch.jsx";
import "../styles/Animal.css";

function Animal() {
    const [query, setQuery] = useState("");
    const navigator = useNavigate();
    const handleChange = (e) => {
        const value = e.target.value;
        // console.log(value);
        setQuery(value);
        navigator(`/animal/search?animal=${value}`);
    };
    return (
        <>
            <div className="animal-title">
                <h1>동물 뽑기</h1>
                <div>
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder="동물을 입력하세요"
                    />
                </div>
            </div>
            <Routes>
                <Route path="/" element={<AnimalMain />} />
                <Route path="/detail/:id" element={<AnimalDetail />} />
                <Route path="/search" element={<AnimalSearch />} />
            </Routes>
        </>
    );
}

export default Animal;
