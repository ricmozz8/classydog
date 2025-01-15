
import GenericModal from "@/Components/Modals/GenericModal";
import LoginForm from "@/Components/Forms/LoginForm";
import RegisterForm from "@/Components/Forms/RegisterForm";
import { useState } from "react";

export default function AuthModal({
    show,
    onclose,
    mode = "login",
    ...params
}) {
    const [authMode, setAuthMode] = useState(mode);

    let [title, setTitle] = useState(mode === 'login' ? "Inicia Sesión" : "Regístrate");

    /**
     * Toggles the authentication mode between login and register.
     * Updates the title accordingly based on the current authentication mode.
     */
    const changeAuthMode = () => {
        setAuthMode(authMode === "login" ? "register" : "login");
        setTitle(authMode === "login" ? "Regístrate" : "Inicia Sesión");
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
                onClose={handleClose}
            />
        ) : (
            <RegisterForm
                onChangeMode={changeAuthMode}
                onClose={handleClose}
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
