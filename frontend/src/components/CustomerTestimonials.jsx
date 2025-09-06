import Title from "./Title"



const CustomerTestimonials = () => {
    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={"CUSTOMER"} text2={"TESTIMONIALS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                   Real experiences from our valued customers
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="bg-white border p-6 flex flex-col justify-between">
                    <p className="text-gray-700 italic mb-4">&ldquo;Forever made online shopping so easy! The products are top quality and delivery was super fast.&rdquo;</p>
                    <div className="flex items-center gap-3 mt-auto">
                        <img alt="reviewer image" src="https://res.cloudinary.com/dk9zbdcmh/image/upload/v1728985450/qy5qgda13cpyvnf4yzwn.png" className="w-10 h-10 bg-blue-100 flex items-center rounded-full justify-center font-bold text-blue-600 text-lg"/>
                        <div>
                            <p className="font-semibold text-gray-800">Sarah Ahmed</p>
                            <p className="text-xs text-gray-500">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border p-6 flex flex-col justify-between">
                    <p className="text-gray-700 italic mb-4">&ldquo;Amazing customer service and a great selection. I found exactly what I needed!&rdquo;</p>
                    <div className="flex items-center gap-3 mt-auto">
                        <img alt="reviewer image" src="https://res.cloudinary.com/dk9zbdcmh/image/upload/v1728988244/huaytibjampelytgnkto.png" className="w-10 h-10 bg-blue-100 flex items-center rounded-full justify-center font-bold text-blue-600 text-lg"/>
                        <div>
                            <p className="font-semibold text-gray-800">Rifat Hossain</p>
                            <p className="text-xs text-gray-500">Chittagong, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border p-6 flex flex-col justify-between">
                    <p className="text-gray-700 italic mb-4">&ldquo;I love the user-friendly website and the deals. Highly recommended for everyone!&rdquo;</p>
                    <div className="flex items-center gap-3 mt-auto">
                        <img alt="reviewer image" src="https://res.cloudinary.com/dk9zbdcmh/image/upload/v1728924580/yoaevbspwiqtr0ov43ev.png" className="w-10 h-10 bg-blue-100 flex items-center rounded-full justify-center font-bold text-blue-600 text-lg"/>
                        <div>
                            <p className="font-semibold text-gray-800">Maya Rahman</p>
                            <p className="text-xs text-gray-500">Sylhet, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerTestimonials