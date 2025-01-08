import Layout from "@/Layouts/Layout";
import PromotionalGreeter from "@/Components/PromotionalGreeter";
import MainCategorySelector from "@/Components/MainCategorySelector";
import AdminToolbar from "@/Components/AdminToolbar";

// model the data for the categories
const categories = [
    {
        title: "Para la casa",
        allRoute: "",
        content: [
            {
                title: "Cocina",
                image: "https://picsum.photos/1000",
                route: "#",
                ads: 50,
            },
            {
                title: "Dormitorio",
                image: "https://picsum.photos/1100",
                route: "#",
                ads: 50,
            },
            {
                title: "Comedor",
                image: "https://picsum.photos/1200",
                route: "#",
                ads: 50,
            },
            {
                title: "Oficina",
                image: "https://picsum.photos/1300",
                route: "#",
                ads: 50,
            },
            {
                title: "Oficina",
                image: "https://picsum.photos/1305",
                route: "#",
                ads: 50,
            },
            {
                title: "Oficina",
                image: "https://picsum.photos/1306",
                route: "#",
                ads: 50,
            },
        ],
    },
    {
        title: "Para el trabajo",
        allRoute: "",
        content: [
            {
                title: "Oficina",
                image: "https://picsum.photos/1400",
                route: "#",
                ads: 50,
            },
            {
                title: "Oficina",
                image: "https://picsum.photos/1500",
                route: "#",
                ads: 50,
            },
            {
                title: "Oficina",
                image: "https://picsum.photos/1401",
                route: "#",
                ads: 50,
            },
            {
                title: "Oficina",
                image: "https://picsum.photos/1300",
                route: "#",
                ads: 50,
            },
        ],
    },
];

export default function Landing({ auth, laravelVersion, phpVersion }) {
    return (
        <Layout pageTitle='Inicio' auth={auth}>
            
            <PromotionalGreeter />

            {categories.map((category, index) => {
                return (
                    <MainCategorySelector
                        key={index}
                        title={category.title}
                        content={category.content}
                        allRoute={category.allRoute}
                        id={index}
                    />
                );
            })}
        </Layout>
    );
}
