import { useContext } from "react";
import Post from "../../components/Post/Post";
import styles from "./PostsList.module.scss";
import { RefreshContext } from "../../context/RefreshContextProvider";

const PostsList = ({ posts }) => {
    // const { refresh, setRefresh } = useContext(RefreshContext);

    return (
        <>
            <div className={styles.wrapper}>
                <h1>Developer's blog</h1>
                <div className={styles.post_list}>
                    {posts.length > 0 &&
                        posts.map((post) => {
                            return (
                                <Post
                                    key={post.id}
                                    post={post}
                                    // setRefresh={setRefresh}
                                    // refresh={refresh}
                                />
                            );
                        })}
                </div>
            </div>
        </>
    );
};
export default PostsList;
