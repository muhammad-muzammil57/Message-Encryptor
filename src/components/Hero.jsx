import assets from "../assets/assets";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        w-full 
        min-h-[600px] 
        flex items-center 
        bg-gradient-to-r from-primary to-accent 
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Secure Your Messages
          </h1>

          <p className="text-white/85 text-lg lg:text-xl mb-8 max-w-md">
            Encrypt & decrypt your private messages using a password. 
            Simple, fast, and secure — your privacy is always protected.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="panel"
              smooth={true}
              duration={500}
              offset={-80} // adjust for fixed navbar height
              className="cursor-pointer"
            >
              <button className="px-6 py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-white transition">
                Encrypt Message
              </button>
            </Link>

            <Link
              to="panel"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
            >
              <button className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-primary transition">
                Decrypt Message
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="flex justify-center items-center">
          <div
            className="w-[90%] md:w-[80%] lg:w-[70%] aspect-[16/12] bg-white/10 backdrop-blur-sm 
                       rounded-2xl border border-white/20 shadow-xl
                       flex items-center justify-center"
          >
            {/* TEMP IMAGE PLACEHOLDER */}
            <img className="" src={assets.bgImage1} alt="Hero Illustration" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
