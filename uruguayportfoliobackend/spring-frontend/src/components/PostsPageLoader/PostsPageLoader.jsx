import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../services/posts";
import PostsPage from "../PostsPage/PostsPage";

const PostsPageLoader = () => {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        getPostById(+id)
            .then((post) => setPost(post))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <>
            {!loading && post && <PostsPage post={post} />}
            {!loading && error && <p>{error.message}</p>}
        </>
    );
};
export default PostsPageLoader;
