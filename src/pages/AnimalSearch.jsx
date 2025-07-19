import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { data } from "../assets/data/data";
import { getRegExp } from "korean-regexp";
import { useEffect } from "react";

function AnimalSearch() {
    const [params] = useSearchParams();
    const navigator = useNavigate();
    const query = params.get("animal") || "";

    useEffect(() => {
        if (query === "") {
            navigator("/animal");
        }
    }, [query, navigator]);

    const filtered = data.filter((item) => getRegExp(query).test(item.name));

    return (
        <>
            <div className="animal-wrap">
                {filtered.map((elem) => {
                    return (
                        <div key={elem.id} className="animal-item">
                            <Link to={`/animal/detail/${elem.id}`}>
                                <img src={elem.img} alt={elem.name} />
                                <div>{elem.name}</div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default AnimalSearch;
