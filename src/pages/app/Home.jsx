import products from "@/utils/data/dataProduk.json";
import { Link } from "react-router-dom";

export default function Home() {
    return <div className="space-y-3">
        <h1 className="text-3xl font-bold underline">
            Product
        </h1>
        {/* Gunakan grid untuk layout yang lebih responsif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {products.map(product => (
                <Link id="cardProduct" key={product.id} to={`#/product?${product.id}`}>
                    <div className="space-y-1 border border-stone-700 rounded-sm shadow-sm hover:shadow-md cursor-pointer p-3 h-full">
                        {/* Placeholder gambar */}
                        <div className="flex items-center justify-center bg-stone-100 rounded-sm h-44 mb-4">
                            <span className="text-stone-400">Image</span>
                        </div>
                        <h2 className="font-semibold text-lg truncate">
                            {product.product_name}
                        </h2>
                        <div className=" font-bold text-primary">
                            Rp {product.price.toLocaleString()}
                        </div>
                        <p className="text-sm text-stone-300 line-clamp-3">
                            {product.description}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
}