

import Title from "../components/Title"

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"PRIVACY"} text2={"POLICY"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 mx-auto">
          <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our e-commerce website.</p>
          <b className="text-gray-800">Information We Collect</b>
          <ul className="list-disc ml-6 mb-4">
            <li>Personal Information: Name, email address, shipping address, phone number, payment details.</li>
            <li>Usage Data: Pages visited, products viewed, time spent on site.</li>
            <li>Cookies and Tracking: We use cookies to improve your experience and analyze site usage.</li>
          </ul>
          <b className="text-gray-800">How We Use Your Information</b>
          <ul className="list-disc ml-6 mb-4">
            <li>To process orders and deliver products.</li>
            <li>To communicate with you about your orders and account.</li>
            <li>To improve our website and services.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <b className="text-gray-800">Sharing Your Information</b>
          <p>We do not sell your personal information. We may share your data with service providers (e.g., payment processors, shipping companies) only as necessary to fulfill your order.</p>
          <b className="text-gray-800">Your Rights</b>
          <ul className="list-disc ml-6 mb-4">
            <li>You can access, update, or delete your personal information by contacting us.</li>
            <li>You can opt out of marketing communications at any time.</li>
          </ul>
          <b className="text-gray-800">Contact Us</b>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@example.com" className="text-blue-500 underline">support@example.com</a>.</p>
        </div>
      </div>
    </div>
  )
}
export default PrivacyPolicy