import { LockClosedIcon, ShareIcon, KeyIcon } from "@heroicons/react/24/outline";
import assets from "../assets/assets";

const HowItWorks = () => {
  return (
    <section id="howitworks" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

        {/* SECTION TITLE */}
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-blue-950">
            How It Works
          </h1>
       <div class="flex items-center pb-8">
    <span class="block border-t-3 border-gray-300  sm:w-[14%] md:w-[24%] lg:w-[35%] mt-0 mb-0 ml-4 mr-4"></span>
    <p class="text-gray-600 max-w-xl  mb-0"> Simple Steps to Secure Your Messages </p>
    <span class="block border-t-3 border-gray-300 sm:w-[14%] md:w-[24%] lg:w-[34%] mt-0 mb-0 ml-4 mr-4"></span>
</div>


        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-lightblue rounded-2xl p-8 shadow-md border border-primary/5">
            <div className="flex justify-center mb-6">
              <img src={assets.encrypt} alt="" />
            </div>
            <h1 className="text-2xl   mb-2 font-extrabold text-blue-900">
              1. Enter Your Message
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Write your message and choose a password. The message becomes encrypted instantly.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-lightblue rounded-2xl p-8 shadow-md border border-primary/5">
            <div className="flex justify-center mb-6">
              <img src={assets.encrypt1} alt="" />
            </div>
            <h1 className="text-2xl font-extrabold text-blue-900 mb-2">
              2. Set Your Password
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Send the encrypted message to anyone. Only you and the receiver know the password.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-lightblue rounded-2xl p-8 shadow-md border border-primary/5">
            <div className="flex justify-center mb-6">
              <img src={assets.encrypt2} alt="" />
            </div>
            <h1 className="text-2xl font-extrabold text-blue-900 mb-2">
              Encrypt & Decrypt
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Receiver enters the correct password and the original message is revealed safely.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
