import { Link } from "react-router";
import { data } from "../assets/data/data.js";

function AnimalMain() {
    return (
        <>
            
            <div className="animal-wrap">
                {data.map((elem) => {
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

export default AnimalMain;
