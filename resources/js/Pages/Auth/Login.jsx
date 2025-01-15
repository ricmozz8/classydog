import AuthModal from "@/Components/Modals/AuthModal";
import { router } from "@inertiajs/react";

export default function Login({auth}) {

    const goHome = () => {
        router.get('/');
    }

    return(
        <AuthModal onclose={goHome} show={true} mode="login"/>
    )
};
