import PrimaryButton from "./PrimaryButton";
import TertiaryButton from "./TertiaryButton";
import Input from "./Input";
import { Link } from "@inertiajs/react";

import GenericModal from "./GenericModal";
import Separator from "./Separator";
export default function LoginModal({ show, onclose, ...params }) {
    return (
        <GenericModal
            title="Inicia Sesión"
            show={show}
            onclose={onclose}
            {...params}
        >
            <form action="#" method="POST" className="select-none">
                <div className="p-6 flex-col gap-4">
                    <Input
                        title="Correo"
                        type="email"
                        name="login-modal-email"
                        required
                        placeholder="juan@ejemplo.com"
                    />

                    <Input
                        type="password"
                        title="Contraseña"
                        name="login-modal-password"
                        required
                        placeholder="*********"
                    />
                </div>
                <Separator />

                <div className="md:flex md:justify-between m-auto p-6">
                    <Link href={route("register")}>
                        <TertiaryButton>¿No tienes Cuenta?</TertiaryButton>
                    </Link>

                    <PrimaryButton>
                        <i className="las la-arrow-right"></i>
                        Entrar
                    </PrimaryButton>
                </div>
            </form>

            <div className="p-6 text-center m-auto">
                <TertiaryButton>¿Olvidaste la contraseña?</TertiaryButton>
            </div>
        </GenericModal>
    );
}
