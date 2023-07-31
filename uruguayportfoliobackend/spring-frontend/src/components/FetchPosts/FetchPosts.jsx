import { useContext, useEffect } from "react";
import { RefreshContext } from "../../context/RefreshContextProvider";
import { getAllPosts } from "../../services/posts";

const FetchPosts = ({ setPosts }) => {
    const { refresh } = useContext(RefreshContext);

    useEffect(() => {
        getAllPosts().then((res) => {
            setPosts(res);
        });
    }, [refresh]);
    return null;
};
export default FetchPosts;
