import FullLogotype from "@/Components/FullLogotype";
export default function Footer(params) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-classydog-main py-4 px-2 text-white m-0">
            <div className="max-w-screen-xl m-auto p-6">
                <FullLogotype variant="negative" />
                <div className="mt-10">
                    <p>Todos los derechos reservados</p>
                    <p> Classydog | &copy;{currentYear}</p>
                    <span className="font-mono font-thin text-yellow-300">v0.0.0 | DEVELOPMENT</span>
                </div>
            </div>
        </div>
    );
}
