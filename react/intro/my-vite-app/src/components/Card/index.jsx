import styles from "./Card.module.scss"; // can call this anything we want

const Card = ({ heading, content, hasButton }) => {
    // console.log(styles.card);
    // console.log(styles.heading);
    return (
        <article className={styles.card}>
            <h3 className={styles.heading}>{heading}</h3>
            <p>{content}</p>
            {/* conditional rendering using props */}
            {/* {hasButton && <button>Click Me</button>} */}
            {/* Can use ternary operator for if/else statement. We can only use expressions in JSX */}
            {hasButton ? <button>Click Me</button> : <span>No Button</span>}
        </article>
    );
};

export default Card;
