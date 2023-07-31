import { useContext, useEffect, useState } from "react";
import "./App.css";
import { getAllPosts } from "./services/posts";
import PostsList from "./containers/PostsList/PostsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPostForm from "./components/AddPostForm/AddPostForm";
import Nav from "./components/Nav/Nav";
import PostsPage from "./components/PostsPage/PostsPage";
import PostsPageLoader from "./components/PostsPageLoader/PostsPageLoader";
import RefreshContextProvider, {
    RefreshContext,
} from "./context/RefreshContextProvider";
import FetchPosts from "./components/FetchPosts/FetchPosts";

function App() {
    const [posts, setPosts] = useState([]);

    // the useEffect for fetching the posts has been moved into its own component.
    // the refresh state is accessible via a child of the context provider

    return (
        <RefreshContextProvider>
            <BrowserRouter>
                <Nav />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <PostsList
                                posts={posts}
                                // refresh={refresh}
                                // setRefresh={setRefresh}
                            />
                        }
                    />
                    <Route
                        path="/add-post"
                        element={
                            <AddPostForm
                            // refresh={refresh}
                            // setRefresh={setRefresh}
                            />
                        }
                    />
                    <Route path="posts/:id" element={<PostsPageLoader />} />
                </Routes>
                <FetchPosts setPosts={setPosts} />
            </BrowserRouter>
        </RefreshContextProvider>
    );
}

export default App;

// Challenge MVP
// Make the delete button work
// it should remove the record from the database and not display it on the frontend
// state should change upon click

// todo:
//~ Backend
// add an authors table to the backend
// assume post only has 1 author. 1 author can create multiple posts
// 1 post has 1 author
// one to many / many to one relationship

// follow the existing convention - new package called authors
// Author.java - first name, last name, location, email?
// will need all the things for post, need to add for author.
// set up the relationship with author

//~ Front end
// display the actual error message coming from the backend
// set up a route / posts/:id
// auto filled form will all the post data
// update the post in the database
