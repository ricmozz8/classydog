import { useState } from "react";

export default function Sidebar({ side, isOpen, title, onToggle, children, ...params }) {




    return (
        <div className={`
            flex-col w-1/6
            fixed h-screen z-10
            transition-all duration-300
            ease-in-out bg-white p-3
            top-0 left-0
            shadow-xl select-none` + (isOpen ? ' translate-x-0' : ' -translate-x-full')
        }>
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                    <i className="las la-bars"></i>
                    <h1 className="text-xl font-bold">{title}</h1>
                </div>
                <span className="px-2 py-1 rounded-full hover:bg-gray-200 cursor-pointer transition-colors" onClick={() => { onToggle()}}>
                    <i className="las la-times"></i>
                </span>
            </div>
            {children}
        </div>
    )

};
