import FullLogotype from "@/Components/Branding/FullLogotype";
import { Link, usePage, router } from "@inertiajs/react";
export default function AdminToolbar(params) {

    const { auth } = usePage().props;

    return (
        <div className="hidden select-none px-3 bg-gray-900 border-t-2 border-secondary-200  gap-2 text-white md:flex items-center justify-between fixed bottom-8 right-0 left-0 w-100 z-20">
            <div className="flex items-center gap-3">

                <i className="las la-user"></i>

                {auth.user !== null ? (
                    <span>{auth.user.name} </span>
                ) : (<span>Usuario no logueado</span>)}




                <div className="flex items-center">
                    <Link href={route('home')}>
                        <div className="hover:bg-gray-700 bg-gray-800 flex gap-2 items-center px-2 py-1 cursor-pointer">
                            <i className="las la-home"></i>
                            <span>Inicio</span>
                        </div>
                    </Link>
                    <Link href={route('products.index')}>
                        <div className="hover:bg-gray-700 bg-gray-800 flex gap-2 items-center px-2 py-1 cursor-pointer">
                            <i className="las la-boxes"></i>
                            <span>Productos</span>
                        </div>
                    </Link>


                    <div className="hover:bg-gray-700 bg-gray-800 flex gap-2 items-center px-2 py-1 cursor-pointer">
                        <i className="las la-user"></i>
                        <span>Usuarios</span>
                    </div>
                    <div className="hover:bg-gray-700 bg-gray-800 flex gap-2 items-center px-2 py-1 cursor-pointer">
                        <div className="rounded-full bg-white text-gray-800 px-1">182</div>
                        <span>Pedidos</span>
                    </div>
                    <div className="hover:bg-gray-700 bg-gray-800 flex gap-2 items-center px-2 py-1 cursor-pointer">
                        <i className="las la-cog"></i>
                        <span>Administración</span>
                    </div>

                </div>
            </div>

            <div className="flex items-center gap-2">

                <div onClick={() => {router.post('logout')}} className="p-2 bg-classydog-main text-white hover:bg-classydog-300 cursor-pointer transition-colors flex items-center" >
                    <i className="las la-sign-out-alt"></i>
                    <p>Forzar Salida</p>
                </div>

                <div className="flex items-center gap-1">
                    <FullLogotype variant="negative" width="100px" />
                    <p className="text-sm font-bold tracking-tighter">DEV</p>
                </div>

            </div>
        </div>
    );
}
