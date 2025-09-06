import { assets } from "../assets/assets"

const Footer = () => {
    return (
        <div>

            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <img src={assets.logo} alt="logo" className="mb-5 w-32" />
                    <p className="w-full md:w-2/3 text-gray-600">
                        Your one-stop online store for quality products at the best prices. Shop with confidence and enjoy secure payments, fast delivery, and excellent customer support.
                    </p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+1-212-456-7890</li>
                        <li>contact@foreveryou.com</li>
                    </ul>
                </div>
            </div>
            <div className="w-full">
                <hr />
                <p className="py-5 text-sm text-center">Copyright 2025@ forever.com - All RIght Reserved</p>
            </div>

        </div>
    )
}

export default Footer