import BestSeller from "../components/BestSeller";
import CustomerTestimonials from "../components/CustomerTestimonials";
import FeaturedBrands from "../components/FeaturedBrands";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import LatestCollection from "../components/LatestCollection";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";
import ShopByOccasion from "../components/ShopByOccasion";
import TipsAndInspiration from "../components/TipsAndInspiration";

const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollection/>
            <BestSeller/>
            <FeaturedBrands/>
            <HowItWorks/>
            <CustomerTestimonials/>
            <ShopByOccasion/>
            <TipsAndInspiration/>
            <OurPolicy/>
            <NewsletterBox/>
        </div>
    );
};

export default Home;