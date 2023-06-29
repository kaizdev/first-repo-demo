import React from "react";
import StyledButton from "../StyledButton/StyledButton";
import { useState } from "react";
import SubHeading from "../SubHeading/SubHeading";

const StyledCounter = () => {
    const [count, setCount] = useState(0);

    const decrementCount = () => {
        setCount(count - 1);
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    // state lives in the counter.

    return (
        <div>
            <SubHeading content={count} />
            <StyledButton onBtnClick={decrementCount} buttonType="danger">
                -
            </StyledButton>
            <StyledButton onBtnClick={incrementCount}>+</StyledButton>
        </div>
    );
};
// Parse the functions down as props into the styled buttons.

// Let;s say we want to be able to access the state in a particular element. We need to move the state into the parent element.
// cannot move a state directly (siblings) -> can only access that state using a parent element.
export default StyledCounter;
