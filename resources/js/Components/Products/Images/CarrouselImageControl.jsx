export default function CarrouselImageControl({ direction = 'left', trigger, ...params }) {

    let icon;

    switch (direction) {
        case 'left':
            icon = 'la-arrow-left';
            break;
        case 'right':
            icon = 'la-arrow-right';
            break;
    }

    return (
        <div className={`
            p-4 block w-fit h-full cursor-pointer
            hover:bg-classydog-main hover:text-white
            transition-all`}
            {...params}
            onClick={() => { trigger() }}>
            <i className={'las' + ' ' + icon}></i>
        </div>
    )

};
