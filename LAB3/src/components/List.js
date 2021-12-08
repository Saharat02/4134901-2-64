import React from "react";
const number = [5, 2];

const text = (
    <>
    <h1 className="red">

    </h1>
    <h1>Hello world !!! </h1>
    <br></br> {number[0] + number[1]}
    </>
);
function missValue(){
    return "Missrd !!";
}

function List(){
    return text;
}

export default List;