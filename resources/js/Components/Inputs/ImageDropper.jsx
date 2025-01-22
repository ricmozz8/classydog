export default function ImageDropper({ caption, ...params }) {

    return (
    <div className="my-3">
        <p className="text-sm">{caption}</p>
        <div className="rounded-md border border-dashed border-gray-300 bg-gray-100 p-8"></div>
    </div>)
};
