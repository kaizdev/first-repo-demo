import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updatePost } from "../../services/posts";
import { RefreshContext } from "../../context/RefreshContextProvider";

const PostsPage = ({ post }) => {
    const { id, title, content, category } = post;
    const { refresh, setRefresh } = useContext(RefreshContext);

    const initialData = {
        // title: title,
        // content: content,
        // category: category,
        ...post,
    };

    const navigate = useNavigate();

    const [updatedPostData, setUpdatedPostData] = useState(initialData);
    const [error, setError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(updatedPostData, "data to send");
        try {
            await updatePost(updatedPostData, post.id);
            setRefresh(refresh + 1);
            navigate("/");
        } catch (e) {
            setError(true);
            console.log(e);
        }
    };

    const handleChange = (e) => {
        console.log(e.target.value, "- value");
        console.log(e.target.id, "-this is the id");
        const { id, value } = e.target;
        setUpdatedPostData({ ...updatedPostData, [id]: value });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        id="title"
                        value={updatedPostData.title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="content">Content: </label>
                    <textarea
                        id="content"
                        cols="30"
                        rows="10"
                        value={updatedPostData.content}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="category">Category: </label>
                    <input
                        type="text"
                        id="category"
                        value={updatedPostData.category}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Update</button>
            </form>
            <p>id: {id}</p>
            <Link to={"/"}>Go back</Link>
        </>
    );
};
export default PostsPage;
