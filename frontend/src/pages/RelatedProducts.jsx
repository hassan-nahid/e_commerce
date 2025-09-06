import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const RelatedProducts = ({ category, subCategory }) => {

    const { products, loading } = useContext(ShopContext)

    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productsCopy.slice(0,5))
        }
    }, [products])

    return (
        <div className="my-24">
            <div className="text-center text-3xl py-2">
                <Title text1={"RELATED"} text2={"PRODUCTS"}/>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-flow-col-4 lg:grid-cols-5 gap-4 gap-y-6">
                {loading ? (
                    Array.from({ length: 5 }).map((_, idx) => (
                        <div key={idx} className="animate-pulse bg-gray-200 rounded-lg h-64 w-full" />
                    ))
                ) : (
                    related.map((item,index) => (
                        <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
                    ))
                )}
            </div>
        </div>
    )
}

export default RelatedProducts