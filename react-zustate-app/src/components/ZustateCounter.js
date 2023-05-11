import React from "react";
import Header from "./Header";
import TodoLogic from "./TodoLogic";

export const ZustateCounter = () => {
    return (
        <div>
            <h1>나는 React: Zustate App</h1>
            <Header />
            <TodoLogic />
        </div>
    );
}