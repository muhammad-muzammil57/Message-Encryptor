import {
  ShieldCheckIcon,
  DocumentDuplicateIcon,
  BoltIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

const Features = () => {
  return (
    <section id="features" className="w-full bg-lightblue py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* SECTION TITLE */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

        {/* SECTION TITLE */}
       
       <div class="flex items-center justify-center pb-8">
    <span class="block border-t-3 border-gray-300  sm:w-[14%] md:w-[24%] lg:w-[33%] mt-0 mb-0 ml-4 mr-4"></span>
     <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-blue-950">
            Our Features
          </h1>
    <span class="block border-t-3 border-gray-300 sm:w-[14%] md:w-[24%] lg:w-[33%] mt-0 mb-0 ml-4 mr-4"></span>
</div>
</div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-primary/5 text-center">
            <ShieldCheckIcon className="h-12 w-12 mx-auto text-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Strong Encryption
            </h3>
            <p className="text-gray-600">
              Messages are encrypted with dynamic hashing and password security.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-primary/5 text-center">
            <DocumentDuplicateIcon className="h-12 w-12 mx-auto text-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Copy & Share Easily
            </h3>
            <p className="text-gray-600">
              Copy encrypted strings and share securely via any communication app.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-primary/5 text-center">
            <BoltIcon className="h-12 w-12 mx-auto text-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Fast Processing
            </h3>
            <p className="text-gray-600">
              Encryption and decryption runs instantly with zero delay.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-primary/5 text-center">
            <EyeSlashIcon className="h-12 w-12 mx-auto text-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Private by Design
            </h3>
            <p className="text-gray-600">
              Only users with the correct password can reveal the original message.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
