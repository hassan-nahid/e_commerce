import Title from "./Title";
import { assets } from "../assets/assets";

const steps = [
    {
        title: "Browse Products",
        description: "Explore our wide range of products and find your favorites.",
        icon: assets.cartIcon
    },
    {
        title: "Add to Cart",
        description: "Select your desired items and add them to your shopping cart.",
        icon: assets.addToCart
    },
    {
        title: "Place Order",
        description: "Complete your purchase with our secure checkout and enjoy fast delivery.",
        icon: assets.track
    }
];

const HowItWorks = () => {
    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={"HOW"} text2={"IT WORKS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Shopping with us is simple and seamless. Follow these easy steps.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="bg-white border p-8 flex flex-col items-center text-center">
                        {typeof step.icon === "string" && step.icon.startsWith("/") ? (
                            <img src={step.icon} alt={step.title + " icon"} className="w-14 h-14 mb-4" />
                        ) : (
                            <div className="text-5xl mb-4">{step.icon}</div>
                        )}
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;