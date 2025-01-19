export default function IconButton({lineIcon, size, ...params}) {

    let fontSize;

    switch (size) {
        case 'tiny':
            fontSize = 'text-sm';
            break;
        case 'small':
            fontSize = 'text-xl';
            break;
        case 'medium':
            fontSize = 'text-2xl';
            break;
        default:
            fontSize = 'text-3xl';
            break;
    }



    return (
        <div {...params} className={"rounded-full text-classydog-text hover:bg-gray-200 px-3 py-2 cursor-pointer transition-colors " + fontSize}>
            <i className={"las" + " la-" + lineIcon}></i>
        </div>
    );

};
