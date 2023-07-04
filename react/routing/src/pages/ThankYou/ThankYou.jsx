import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadSpinner/LoadingSpinner";

const ThankYou = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 2000);
    }, []);
    return (
        <>
            <h2>Thanks for your message</h2>
            <LoadingSpinner />
        </>
    );
};

export default ThankYou;
