export default function BackButton({params}) {

    return(
        <span {...params} onClick={() => { window.history.back() }} className="cursor-pointer rounded-full border-slate-700 border px-2 py-1 block m-2 w-fit"><i className="las la-arrow-left"></i></span>
    )

};
