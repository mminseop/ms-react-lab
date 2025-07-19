import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
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
            {/* 중첩된 라우팅을 위한 Outlet */}
            <Outlet />
        </>
    );
}

export default Animal;
