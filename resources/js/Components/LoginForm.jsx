import PrimaryButton from "./PrimaryButton";
import TertiaryButton from "./TertiaryButton";
import Input from "./Input";
import Separator from "./Separator";

import { router, useForm } from "@inertiajs/react";




export default function LoginForm({ onChangeMode, onClose, ...params }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const loginUser = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
            onSuccess: () => onClose()
        })
    }



    return (
        <form
            className="select-none"
            {...params}
            onSubmit={loginUser}
        >
            <div className="p-6 flex-col gap-4">
                <Input
                    title="Correo"
                    type="email"
                    name="login-modal-email"
                    required
                    placeholder="nombre@ejemplo.com"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                />

                <Input
                    type="password"
                    title="Contraseña"
                    name="password"
                    autoComplete="current-password"
                    required
                    placeholder="*********"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    error={errors.password}
                />
            </div>
            <Separator />

            <div className="md:flex md:justify-between m-auto p-6">
                <TertiaryButton onClick={onChangeMode}>
                    ¿No tienes Cuenta?
                </TertiaryButton>

                <PrimaryButton disabled={processing}>
                    <i className="las la-arrow-right"></i>
                    Entrar
                </PrimaryButton>
            </div>
            <div className="p-6 text-center m-auto bg-gray-100">
                <TertiaryButton>¿Olvidaste la contraseña?</TertiaryButton>
            </div>
        </form>
    );
}
