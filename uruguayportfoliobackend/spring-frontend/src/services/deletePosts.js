export const deletePosts = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/posts/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(
                `HTTP error! status: ${response.status}, message: ${errorData}`
            );
        } else {
            alert("Post deleted successfully");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error occurred while deleting post");
    }
};
