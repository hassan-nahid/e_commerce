import Title from "./Title";

const tips = [
  {
    title: "How to Choose the Perfect Gift",
    description: "Consider the recipient's interests, needs, and style. Personalize your gift for a memorable touch.",
  },
  {
    title: "Trending Styles for This Season",
    description: "Stay ahead of the fashion curve with our curated selection of trending outfits and accessories.",
  },
  {
    title: "Care Tips for Your Products",
    description: "Extend the life of your purchases by following our expert care and maintenance advice.",
  },
  {
    title: "Smart Shopping Hacks",
    description: "Use filters, wishlists, and reviews to make informed decisions and get the best deals.",
  },
  {
    title: "Inspiration for Every Occasion",
    description: "Find outfit ideas and product recommendations for weddings, parties, and everyday moments.",
  },
  {
    title: "Eco-Friendly Shopping Tips",
    description: "Choose sustainable products and packaging to reduce your environmental impact while shopping.",
  },
];

const TipsAndInspiration = () => {
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"TIPS"} text2={"& INSPIRATION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Get expert advice, style guides, and inspiration for your shopping journey.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {tips.map((tip, idx) => (
          <div key={idx} className="bg-white border p-6 flex flex-col justify-between">
            <p className="text-gray-700 italic mb-4">{tip.description}</p>
            <p className="font-semibold text-gray-800 mt-auto">{tip.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsAndInspiration;