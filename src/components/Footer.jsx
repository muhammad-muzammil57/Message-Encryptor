import { HeartIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            MessageEncryptor
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Secure your private conversations with client-side encryption.
            Your messages, your passwords, your control.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-3">
            <li><a href="#howitworks" className="hover:text-white transition-colors">How it Works</a></li>
            <li><a href="#panel" className="hover:text-white transition-colors">Encrypt/Decrypt</a></li>
            <li><span className="text-gray-500 cursor-not-allowed">API (Coming soon)</span></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-3">
            <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} MessageEncryptor. All Rights Reserved.
        </p>
        <div className='flex justify-center'>
        <div className='border-t border-gray-700 mt-6 pt-6 text-center w-70'></div>
        </div>
         <div className=' flex justify-center items-center text-gray-300 '>
        <span className='flex '>Made With  <HeartIcon className='w-6 text-red-700'/> By Muhammad Muzammil</span>
    </div>
      </div>
    </footer>
  );
}
