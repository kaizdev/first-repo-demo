import { Link } from "react-router-dom";
import { deletePosts } from "../../services/deletePosts";
import styles from "./Post.module.scss";
import { useContext } from "react";
import { RefreshContext } from "../../context/RefreshContextProvider";

const Posts = ({ post }) => {
    const { title, category, content, id } = post;
    const { refresh, setRefresh } = useContext(RefreshContext);

    const handleDelete = async () => {
        await deletePosts(id);
        console.log("deleted");
        setRefresh(refresh + 1);
    };
    return (
        <div className={styles.post}>
            <h3>{title.toUpperCase()}</h3>
            <p>{id}</p>
            <p>{category}</p>
            <p>{content}</p>
            <Link to={`posts/${id}`}>See More</Link>
            <br />
            <button onClick={handleDelete} className={styles.delete_btn}>
                Delete Post
            </button>
        </div>
    );
};
export default Posts;
