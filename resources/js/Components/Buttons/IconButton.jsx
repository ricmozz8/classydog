export default function IconButton({lineIcon, ...params}) {

    return (
        <div className="rounded-full hover:bg-gray-200 px-3 py-2 cursor-pointer text-3xl transition-colors">
            <i className={"las" + " " + lineIcon}></i>
        </div>
    );

};
