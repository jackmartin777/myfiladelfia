import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is MyFiladelfia?",
    answer: "MyFiladelfia is a biblically-based network offering online theology and biblical counselling courses. We provide pastoral care, mentorship, and life skills development, respecting all languages, cultures, and Christian denominations."
  },
  {
    question: "Are your courses accredited?",
    answer: "Yes, MyFiladelfia is a QCTO Accredited Skills Development Provider (SDP260523133008). While we don't issue national qualifications, our religious qualifications are granted by MINTS (Miami International Seminary)."
  },
  {
    question: "How long do the courses take to complete?",
    answer: "Course duration varies depending on the program. Our Biblical Counselling program, for example, is divided into three levels, each typically taking one year to complete. Short courses may range from a few weeks to several months."
  },
  {
    question: "Can I study at my own pace?",
    answer: "Yes, our courses are designed to be flexible. While there are suggested timelines, you can generally study at your own pace within reasonable limits."
  },
  {
    question: "What qualifications do I need to enroll?",
    answer: "Entry requirements vary by course. Generally, a high school diploma or equivalent is required. Some advanced courses may have additional prerequisites. Please check the specific course details for more information."
  },
  {
    question: "How much do the courses cost?",
    answer: "Course fees vary depending on the program. Please visit our Investment page for detailed pricing information. We offer flexible payment options to accommodate various financial situations."
  },
  {
    question: "Is financial aid available?",
    answer: "While we don't offer direct financial aid, we do have flexible payment plans. Please contact us to discuss your specific situation and explore possible options."
  },
  {
    question: "Can I get a refund if I'm not satisfied with the course?",
    answer: "We have a 30-day cancellation period for our level courses, after which you will be responsible for the entire course fee. The initial deposit is non-refundable. For short courses, please contact us for the specific refund policy."
  },
  {
    question: "How do I apply for a course?",
    answer: "You can apply for our courses through the registration form available on our website. Navigate to the specific course page and click on the 'Apply Now' or 'Register' button to start the application process."
  },
  {
    question: "Do you offer job placement assistance after completing a course?",
    answer: "While we don't offer direct job placement, our courses are designed to enhance your skills and qualifications in the field of Christian ministry and counselling. We also provide guidance on professional registration with bodies like ASCHP and CCSA, which can aid in career advancement."
  }
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg text-primary-dark hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{item.question}</span>
        {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600 animate-slideInFromBottom">
          {item.answer}
        </p>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="bg-neutral-100 min-h-screen py-12">
      <Helmet>
        <title>Frequently Asked Questions - MyFiladelfia</title>
        <meta name="description" content="Find answers to common questions about MyFiladelfia's online theology and biblical counselling courses, accreditation, and more." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">Frequently Asked Questions</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Can't find the answer you're looking for? Feel free to contact us.
          </p>
          <a href="/contact" className="btn btn-primary inline-flex items-center">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;