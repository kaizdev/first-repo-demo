import React from "react";
import styles from "./SubHeading.module.scss";

const SubHeading = ({ content }) => {
    return <h2 className={styles.heading}>{content}</h2>;
};

export default SubHeading;
