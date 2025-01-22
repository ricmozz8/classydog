export default function ImageDropper({ caption, ...params }) {

    return (
        <div className="my-3">
            <p className="text-sm my-2 text-classydog-text font-medium">{caption}</p>
            <div className="rounded-md border border-dashed border-gray-300  p-12 hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="text-center text-gray-400 m-auto w-full">
                    <i className="las la-cloud-upload-alt text-4xl"></i>
                    <p className="text-sm">Arrastra tu imagen aquí o haz clic para subirla</p>
                </div>

            </div>
        </div>)
};
