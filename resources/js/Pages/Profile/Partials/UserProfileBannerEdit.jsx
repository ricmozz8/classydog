
export default function UserProfileBannerEdit({ user, ...params }) {
    return (
        <div className="relative flex-row-reverse my-3">
            <img {...params}
                className={`w-full bg-gray-200 h-[300px]
                object-cover hover:brightness-90 transition-all
                cursor-pointer 2xl:rounded-md`}
                src="https://picsum.photos/1000/900" />

            <img className={`rounded-full w-[200px] h-[200px]
                bg-gray-200 m-auto md:m-0 md:ml-12 -mb-16 -translate-y-1/2  border-4 border-white
                object-cover hover:brightness-90 transition-all cursor-pointer `}
                src={"https://picsum.photos/200/300"} />


        </div>
    )
};
