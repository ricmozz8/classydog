import { useEffect, useState } from "react";
import Separator from "../Sections/Separator";

export default function Sidebar({ side, isOpen, title, onToggle, children, ...params }) {


    let showClass = isOpen ? 'translate-x-0' : '-translate-x-full';
    let hideClass = isOpen ? 'fixed' : 'hidden';
    let sideClass = side === 'left' ? 'left-0' : 'right-0';


    return (

        <>
            {/* overlay */}
            <div className={"fixed inset-0 z-10 bg-gray-900/50 transition-colors " + hideClass} onClick={() => { onToggle() }} id="overlay"></div>

            <div id="sidebar" className={`
            flex-col w-80 min-w-60
            fixed h-screen z-20
            transition-all duration-300
            ease-in-out bg-white
            top-0   
            shadow-xl select-none` + ' ' + showClass + ' ' + sideClass
            }>
                <div className="flex items-center justify-between p-3 gap-3">
                    <div className="flex items-center gap-2 ">
                        <i className="las la-bars"></i>
                        <h1 className="text-xl font-bold">{title}</h1>
                    </div>
                    <span className="px-2 py-1 rounded-full hover:bg-gray-200 cursor-pointer transition-colors" onClick={() => { onToggle() }}>
                        <i className="las la-times"></i>
                    </span>
                </div>
                <Separator/>
                {children}
            </div>
        </>

    )

};
