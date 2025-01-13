import AuthModal from "@/Components/AuthModal";
import { router } from "@inertiajs/react";

export default function Login({auth}) {

    const goHome = () => {
        router.get('/');
    }

    return(
        <AuthModal onclose={goHome} show={true} mode="register"/>
    )
};
