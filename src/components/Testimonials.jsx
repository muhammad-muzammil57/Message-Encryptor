import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Journalist & Researcher",
    feedback:
      "MessageEncryptor gives me peace of mind when sending sensitive notes. The encryption process is simple yet highly secure.",
    avatar:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Daniel Carter",
    role: "Full Stack Developer",
    feedback:
      "I tested multiple tools, but this one stands out because the entire encryption stays in the browser. Zero data stored. Perfect.",
    avatar:
      "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Amina Yousaf",
    role: "Entrepreneur",
    feedback:
      "My business relies on confidentiality. This tool allows me to share private details with my partners securely.",
    avatar:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white dark:bg-gray-500 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Trusted by Professionals Worldwide
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Real feedback from people who rely on encrypted communication daily.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <FaQuoteLeft className="text-2xl text-indigo-600 dark:text-indigo-400 mb-4" />

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {item.feedback}
            </p>

            <div className="flex items-center gap-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  {item.name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
