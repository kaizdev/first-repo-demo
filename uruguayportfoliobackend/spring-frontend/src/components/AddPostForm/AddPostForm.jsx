import { useContext, useState } from "react";
import styles from "./AddPostForm.module.scss";
import { createPost } from "../../services/posts";
import { useNavigate } from "react-router-dom";
import { RefreshContext } from "../../context/RefreshContextProvider";

const AddPostForm = () => {
    const { refresh, setRefresh } = useContext(RefreshContext);

    const initialData = {
        title: "",
        content: "",
        category: "",
    };
    const [newPostData, setNewPostData] = useState(initialData);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(newPostData, "data to send");
        try {
            await createPost(newPostData);
            setRefresh(refresh + 1);
            navigate("/");
        } catch (e) {
            setError(true);
            console.log(e);
        }
    };

    const handleChange = (e) => {
        console.log(e.target.value, "this is the value");
        console.log(e.target.id, "this is the id");
        const { id, value } = e.target;
        setNewPostData({ ...newPostData, [id]: value });
    };

    return (
        <>
            <h1>Add new post</h1>
            <form>
                <div className={styles.form_element}>
                    <label>Title: </label>
                    <input
                        type="text"
                        required
                        id="title"
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.form_element}>
                    <label>Content: </label>
                    <textarea
                        cols="30"
                        rows="10"
                        required
                        id="content"
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className={styles.form_element}>
                    <label>Category</label>
                    <select id="category" onChange={handleChange} required>
                        <option value="" hidden>
                            Select one...
                        </option>
                        <option>Coding</option>
                        <option>Front end</option>
                        <option>Back end</option>
                        <option>Lifestyle</option>
                    </select>
                </div>
                <button type="submit" onClick={handleSubmit}>
                    Add post
                </button>
            </form>
            {error && <p>Could not create a post</p>}
        </>
    );
};
export default AddPostForm;
