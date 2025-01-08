import PrimaryButton from "./PrimaryButton";
import TertiaryButton from "./TertiaryButton";
import Input from "./Input";
import Separator from "./Separator";
export default function RegisterForm({
    action,
    method,
    onPost,
    onChangeMode,
    ...params
}) {
    return (
        <form
            action={action}
            method={method}
            className="select-none"
            {...params}
        >
            <div className="p-6 flex-col gap-4">
                <Input
                    title="Nombre"
                    type="text"
                    name="login-modal-name"
                    required
                    placeholder="Juan Lopez"
                />
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
                    placeholder="crea una contraseña"
                />
                <Input
                    type="password"
                    title="Contraseña"
                    name="password-confirmation"
                    required
                    placeholder="repite tu contraseña"
                />
            </div>
            <Separator />

            <div className="md:flex md:justify-between m-auto p-6">
                <TertiaryButton onClick={onChangeMode}>
                    ¿Ya te has registrado?
                </TertiaryButton>

                <PrimaryButton>
                    <i className="las la-arrow-right"></i>
                    Registrarse
                </PrimaryButton>
            </div>
        </form>
    );
}
