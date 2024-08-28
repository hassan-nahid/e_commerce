import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"Us"}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 md-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="contact image" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our store</p>
          <p className="text-gray-500">23429 Daffoed Terminal <br /> Dellewis 78, Washignton, USA</p>
          <p className="text-gray-500">Tel: (342) 333-2323 <br /> Email: admin@forever.com</p>
          <p className="font-semibold text-xl">Careers at Forever</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact