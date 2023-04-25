import React from "react";
import "./Triangle.scss";

const Triangles = () => {
    const triArr = Array.apply(null, Array(60)).map((u, i) => i);
    console.log(triArr);
    const triMap = triArr.map((tri) => (
        <div className="triangle-box">
            <div className="gg-shape-triangle" key={tri}></div>
        </div>
    ));

    return <div className="triangle-container">{triMap}</div>;
};

export default Triangles;
