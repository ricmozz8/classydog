import FullLogotype from "@/Components/Branding/FullLogotype";
import { Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";
import ApplicationLogo from "@/Components/Branding/ApplicationLogo";
export default function AdminToolbar(params) {

    const { auth } = usePage().props;
    const [isTinyButtonOpen, setIsTinyButtonOpen] = useState(false);
    const [isAdminBarOpen, setIsAdminBarOpen] = useState(true);

    let toggleAdminBar = () => {
        setIsAdminBarOpen(!isAdminBarOpen);
        setIsTinyButtonOpen(!isTinyButtonOpen);
    }

    let tinyButtonClass = isTinyButtonOpen ? 'fixed' : 'hidden';
    let adminBarClass = isAdminBarOpen ? 'md:flex' : 'md:hidden';

    return (
        <>
            <div className={"hidden select-none px-3 bg-gray-900 border-t-2 border-secondary-200  gap-2 text-white items-center justify-between fixed bottom-8 right-0 left-0 w-100 z-20 " + adminBarClass}>
                <div className="flex items-center gap-3">


                    <div onClick={() => { toggleAdminBar() }} className=" bg-red-500 p-2 hover:bg-red-700 cursor-pointer transition-colors">
                        <i className="las la-times"></i>
                    </div>


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

                    <div onClick={() => { router.post('logout') }} className="p-2 bg-classydog-main text-white hover:bg-classydog-300 cursor-pointer transition-colors flex items-center" >
                        <i className="las la-sign-out-alt"></i>
                        <p>Forzar Salida</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <FullLogotype variant="negative" width="100px" />
                        <p className="text-sm font-bold tracking-tighter">DEV</p>


                    </div>

                </div>
            </div>
            <div onClick={() => { toggleAdminBar() }} className={" w-fit py-3   bottom-10 right-0 px-3 left-0 z-20 bg-gray flex items-center gap-1 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors text-gray-800 shadow-md rounded-e-md " + tinyButtonClass}>
                <ApplicationLogo width="20px" />
                <p className="font-bold uppercase">DEV</p>
            </div>

        </>
    );
}
