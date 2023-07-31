import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/" className={styles.link}>
                Posts
            </NavLink>
            <NavLink to="/add-post" className={styles.link}>
                Add Post
            </NavLink>
        </nav>
    );
};
export default Nav;
