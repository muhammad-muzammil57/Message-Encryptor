import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // success / error / null

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "All fields are required." });
      return;
    }

    try {
      const res = await axios.post(
        "https://formspree.io/f/xojqlany",
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (res.status === 200) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send message." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send message." });
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-50 dark:bg-gray-500 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mt-4 max-w-xl mx-auto">
          Have questions or suggestions? Send us a message!
        </p>

        {status && (
          <div
            className={`mt-6 p-4 rounded-lg text-center ${
              status.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status.message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-6 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-6 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
            className="w-full mb-6 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
