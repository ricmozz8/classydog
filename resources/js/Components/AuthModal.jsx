
import GenericModal from "./GenericModal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

export default function AuthModal({
    show,
    onclose,
    mode = "login",
    ...params
}) {
    const [authMode, setAuthMode] = useState(mode);

    let [title, setTitle] = useState("Inicia Sesión");

    /**
     * Toggles the authentication mode between login and register.
     * Updates the title accordingly based on the current authentication mode.
     */
    const changeAuthMode = () => {
        setAuthMode(authMode === "login" ? "register" : "login");
        setTitle(authMode === "login" ? "Registrate" : "Inicia Sesión");
    };


    const handlePost = (e) => {
        e.preventDefault();

    }

    const handleClose = () => {
        onclose()
        
        setAuthMode('login');
        setTitle('Inicia Sesión');
    }

    const form =
        authMode === "login" ? (
            <LoginForm
                onChangeMode={changeAuthMode}
            />
        ) : (
            <RegisterForm
                onChangeMode={changeAuthMode}
            />
        );

    return (
        <GenericModal
            className="w-1/2 transition-all"
            title={title}
            show={show}
            onclose={handleClose}
            {...params}
        >
            {form}
        </GenericModal>
    );
}
