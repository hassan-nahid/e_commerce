import Title from "../components/Title"
import { useState } from "react"

const faqData = [
  {
    question: "How do I place an order?",
    answer: "Simply browse our products, add items to your cart, and proceed to checkout. Follow the instructions to complete your purchase."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit/debit cards, Stripe, and Cash on Delivery. More options may be available at checkout."
  },
  {
    question: "How can I track my order?",
    answer: "After placing your order, you can track its status from the Orders page in your account dashboard."
  },
  {
    question: "Can I return or exchange a product?",
    answer: "Yes, we offer easy returns and exchanges. Please refer to our Return Policy for details and instructions."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach us via the Contact page or email us at <a href=\"mailto:support@example.com\" className=\"text-blue-500 underline\">support@example.com</a>."
  },
  {
    question: "Is my personal information safe?",
    answer: "Yes, we use industry-standard security measures to protect your data. Please see our Privacy Policy for more details."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship within the country only. International shipping will be available soon."
  },
  {
    question: "How do I cancel my order?",
    answer: "You can cancel your order from the Orders page before it is shipped. If you need help, contact our support team."
  },
  {
    question: "Can I change my shipping address after placing an order?",
    answer: "If your order has not shipped yet, you can update your shipping address from your account or contact support."
  },
  {
    question: "What if I forget my account password?",
    answer: "Use the 'Forgot Password' option on the login page to reset your password."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"FREQUENTLY"} text2={"ASKED QUESTIONS"} />
      </div>
      <div className="my-10 max-w-2xl mx-auto flex flex-col gap-4 text-gray-700">
        {faqData.map((item, idx) => (
          <div key={idx} className="border rounded-xl shadow-sm">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => handleToggle(idx)}
            >
              <span className="text-lg text-gray-800 font-semibold">{item.question}</span>
              <span className={`transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4 text-gray-600 text-base animate-fade-in">
                <span dangerouslySetInnerHTML={{ __html: item.answer }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
