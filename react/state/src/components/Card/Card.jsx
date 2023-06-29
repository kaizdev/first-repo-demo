import React from "react";
import { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ title, content }) => {
    const [contentShown, setContentShown] = useState(false);
    const [isOutlined, setIsOutlined] = useState(true);

    const toggleContent = () => {
        setContentShown(!contentShown); //give the opposite state - this is a boolean, so from false to true, etc.
    };

    const toggleOutline = () => {
        setIsOutlined(!isOutlined);
    };

    const cardClasses = isOutlined
        ? [styles.card, styles.outlined]
        : [styles.card];

    return (
        <div className={cardClasses.join(" ")}>
            <h2>{title}</h2>
            <button onClick={toggleOutline}>
                {isOutlined ? "Remove" : "Add"} Outline
            </button>
            <button onClick={() => toggleContent()}>
                {contentShown ? "Hide" : "Show"}
            </button>
            {contentShown && <p>{content}</p>}
        </div>
    );
};

export default Card;
