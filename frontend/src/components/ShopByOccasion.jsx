import Title from "./Title";

const occasions = [
    { title: "Eid Collection", img: "https://res.cloudinary.com/dk9zbdcmh/image/upload/v1757143381/wzqqjc9a0h2wxckuhilc.jpg" },
    { title: "Wedding Special", img: "https://res.cloudinary.com/dk9zbdcmh/image/upload/v1757143978/xv0jf64ixztaw3pj9gii.jpg" },
    { title: "Winter Wear", img: "https://res.cloudinary.com/dk9zbdcmh/image/upload/v1728996302/gsy95k2ycmbmky8z07nc.png"},
    { title: "Back to School", img: "https://res.cloudinary.com/dk9zbdcmh/image/upload/v1728994270/raxs2rlt4vq3mfdbmkfd.png" },
    { title: "Party Looks", img: "https://res.cloudinary.com/dk9zbdcmh/image/upload/v1728924724/dgctdk6ru5ixec2idz3n.png" },
];

const ShopByOccasion = () => {
    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={"SHOP"} text2={"BY OCCASION"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Find the perfect products for every occasion and celebration.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 items-center justify-items-center">
                {occasions.map((occasion, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <div className="bg-white p-3 border mb-3 flex items-center justify-center">
                            <img src={occasion.img} alt={occasion.title} className="w-24 h-24 object-cover" />
                        </div>
                        <span className="font-semibold text-black text-sm text-center">{occasion.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopByOccasion;