import React from "react";
import notFoundKitten from "./404.jpg";

const NotFoundPage = () => {
    return (
        <main>
            <h2>The page you're looking for doesn't exist</h2>
            <img src={notFoundKitten} alt="hiding kitten" />
        </main>
    );
};

export default NotFoundPage;
