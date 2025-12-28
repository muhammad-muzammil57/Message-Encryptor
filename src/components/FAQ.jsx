import { useState } from "react";

const faqs = [
  {
    question: "Is my encrypted message stored anywhere?",
    answer:
      "No. The encryption process runs directly in your browser using client-side logic. Nothing is saved on our servers, ensuring privacy and full message ownership.",
  },
  {
    question: "What happens if I forget my password?",
    answer:
      "Without the password, the encrypted content cannot be recovered. Always save your password safely.",
  },
  {
    question: "Can someone brute-force my encrypted message?",
    answer:
      "The encryption uses strong algorithms that resist brute-force attacks. However, using complex passwords increases security.",
  },
  {
    question: "Can I use special characters in my password?",
    answer:
      "Yes. You can use symbols, spaces, and uppercase characters. Special characters increase password strength.",
  },
  {
    question: "Does the website work offline?",
    answer:
      "Yes. Core encryption runs in your browser. Internet is only required to load the website the first time.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-gray-50 dark:bg-gray-900 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Find answers to common questions about encrypting and decrypting your messages.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl bg-white dark:bg-gray-800 shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center"
            >
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                {item.question}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-2xl font-bold">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
