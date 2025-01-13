import { Link } from "@inertiajs/react";

export default function ProductMiniSquared({ product }) {


    // simplifies the description to take only 50 characters
    const simpleDescription = () => {
        if (product.description.length > 50) {
            return product.description.substring(0, 50) + "...";
        } else {
            return product.description;
        }
    };

// href={route('', product.id)}
    const prettyPrice = '$' + product.price.toFixed(2);
    return (
        <Link  >
            <div className=" max-w-52 flex-col items-center justify-center cursor-pointer  transition-colors">
                <img className="w-full object-cover rounded-lg" src='https://picsum.photos/900' alt={product.name} />
                <div className="py-3">
                    <h1 className="text-3xl font-semibold">{prettyPrice}</h1>
                    <h2 className="text-sm">{product.name}</h2>
                    <p className="text-xs">{simpleDescription()}</p>
                </div>
            </div>
        </Link>
    );
};
