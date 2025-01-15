import PrimaryButton from "../Buttons/PrimaryButton";
import TertiaryButton from "../Buttons/TertiaryButton";
import Input from "../Inputs/Input";
import Separator from "../Sections/Separator";
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
                    placeholder="Tu Nombre"
                />
                <Input
                    title="Correo"
                    type="email"
                    name="login-modal-email"
                    required
                    placeholder="nombre@ejemplo.com"
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
