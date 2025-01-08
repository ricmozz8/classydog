import FullLogotype from "./FullLogotype";
export default function AdminToolbar(params) {
    return (
        <div className="hidden select-none px-3 bg-gray-900 border-t border-gray-400  gap-2 text-white md:flex items-center justify-between fixed bottom-0 right-0 left-0 w-100 z-20">
            <div className="flex items-center gap-3">
                <i className="las la-user"></i>
                <span>Administrador (Rol) </span>

                <div className="flex items-center">
                    <div className="hover:bg-gray-700 bg-gray-800 flex gap-2 items-center px-2 py-1 cursor-pointer">
                        <i className="las la-cog"></i>
                        <span>Administración</span>
                    </div>
                    <div className="hover:bg-gray-700 bg-gray-800 flex gap-2 items-center px-2 py-1 cursor-pointer">
                        <i className="las la-boxes"></i>
                        <span>Contenido</span>
                    </div>
                    <div className="hover:bg-gray-700 bg-gray-800 flex gap-2 items-center px-2 py-1 cursor-pointer">
                        <i className="las la-user"></i>
                        <span>Usuarios</span>
                    </div>
                    <div className="hover:bg-gray-700 bg-gray-800 flex gap-2 items-center px-2 py-1 cursor-pointer">
                        <div className="rounded-full bg-white text-gray-800 px-1">182</div>
                        <span>Pedidos</span>
                    </div>
                </div>
            </div>

            <div className="">
                <FullLogotype variant="negative" width="100px" />
            </div>
        </div>
    );
}
