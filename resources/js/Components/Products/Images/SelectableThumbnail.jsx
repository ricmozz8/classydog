export default function SelectableThumbnail({ isFocused, imageURL, ...params }) {

    const focusClass = 'border-4 border-classydog-main ';
    return (
        <img
            {...params}
            src={imageURL}
            className={"w-20 h-20 object-cover border-2 rounded-md hover:border-2 hover:border-gray-400 cursor-pointer" + (isFocused ? ' ' + focusClass : '')}
        />
    )

};
