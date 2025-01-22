export default function UserProfileBannerEdit({ user, ...params }) {
    return (
        <div className="my-3 h-full">
            <img {...params}
                className={`w-full bg-gray-200 h-[300px]
                object-cover hover:brightness-90 transition-all
                cursor-pointer rounded-md`}
                src="https://picsum.photos/1000/900" />

            <img className={`rounded-full w-[120px] h-[120px]
                bg-gray-200 absolute ml-[2em]
                -translate-y-1/2 border-4 border-white
                hover:brightness-90 transition-all cursor-pointer `}
                src={"https://picsum.photos/200/300"} />


        </div>
    )
};
