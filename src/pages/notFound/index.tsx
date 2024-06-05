import React from "react";

//icons
import {Link, useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex item-center justify-center h-screen">
            <div className="my-auto flex flex-col">
                <div className="text-center py-5">
                    <p>You may not have access to this page </p>
                </div>

                <Link
                    to=""
                    className="bg-green white-text text-center px-3 py-2 w-32 rounded mx-auto"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
