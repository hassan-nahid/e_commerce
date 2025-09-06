import { assets } from "../assets/assets";
import Title from "./Title";

const brands = [
    { name: "Nike", logo: assets.nike },
    { name: "Adidas", logo: assets.adidas },
    { name: "Zara", logo: assets.zara },
    { name: "Levi's", logo: assets.levis },
    { name: "Gucci", logo: assets.gucci },
];

const FeaturedBrands = () => {
    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={"FEATURED"} text2={"BRANDS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Discover our most popular brands, trusted by thousands of customers for quality and reliability.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-8 items-center justify-items-center">
                {brands.map((brand, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <img src={brand.logo} alt={brand.name + ' logo'} className="w-20 h-20 object-contain mb-3" />
                        <span className="font-semibold text-gray-700 text-sm">{brand.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedBrands;