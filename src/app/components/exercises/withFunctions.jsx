import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => () => {
    const [isAuth, setIsAuth] = useState();

    const hasValue = () => {
        return localStorage.getItem("auth") === "token";
    };

    const onLogin = () => {
        localStorage.setItem("auth", "token");
        setIsAuth(hasValue());
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
        setIsAuth(hasValue());
    };

    return (
        <>
            <CardWrapper>
                <Component
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                    isAuth={isAuth}
                />
            </CardWrapper>
        </>
    );
};

export default withFunctions;
