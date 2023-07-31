export const getAllPosts = async () => {
    // fetch the data
    const response = await fetch("http://localhost:8080/posts");
    return await response.json();
};

export const createPost = async (data) => {
    const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Could not create a post");
    }
};

export const updatePost = async (data, id) => {
    const response = await fetch(`http://localhost:8080/posts/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Could not update the post");
    }
};

// getPostById

export const getPostById = async (id) => {
    const response = await fetch(`http://localhost:8080/posts/${id}`);
    return await response.json();
};
