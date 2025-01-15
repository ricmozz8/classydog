import Modal from "@/Components/Modals/Modal";
import Separator from "@/Components/Sections/Separator";
export default function GenericModal({ title,  show, onclose, children, ...params }) {
    return (
        <Modal {...params} show={show}>
            <div className="flex items-center justify-between p-6 select-none">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <div
                    className=" bg-gray-200 rounded-full cursor-pointer px-3 py-2 text-center hover:bg-gray-300 transition-colors"
                    onClick={() => {
                        onclose();
                    }}
                >
                    <i className="las la-times"></i>
                </div>
            </div>
            <Separator/>
            {children}
        </Modal>
    );
}
