import { useState } from "react";
import { encryptMessage, decryptMessage } from "../utils/crypto";

export default function EncryptDecryptPanel() {
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("encrypt"); // "encrypt" or "decrypt"

  const handleAction = () => {
    if (!message || !password) return;

    if (mode === "encrypt") {
      const encrypted = encryptMessage(message, password);
      setResult(encrypted);
    } else {
      const decrypted = decryptMessage(message, password);
      setResult(decrypted || "Invalid password or ciphertext");
    }
  };

  return (
    <section
      id="panel"
      className="bg-gray-50 dark:bg-gray-500 py-24 px-6 min-h-screen"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Encrypt / Decrypt Messages
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Enter a message and a password to encrypt or decrypt securely.
        </p>

        {/* Mode Toggle */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setMode("encrypt")}
            className={`px-6 py-2 rounded-xl font-semibold transition-colors ${
              mode === "encrypt"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            Encrypt
          </button>
          <button
            onClick={() => setMode("decrypt")}
            className={`px-6 py-2 rounded-xl font-semibold transition-colors ${
              mode === "decrypt"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            Decrypt
          </button>
        </div>

        {/* Input Fields */}
        <textarea
          rows="4"
          placeholder={mode === "encrypt" ? "Type message to encrypt..." : "Paste ciphertext to decrypt..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={handleAction}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors mb-6"
        >
          {mode === "encrypt" ? "Encrypt Message" : "Decrypt Message"}
        </button>

        {/* Result */}
        {result && (
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl text-left break-words">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Result:</h4>
            <p className="text-gray-800 dark:text-gray-200">{result}</p>
          </div>
        )}
      </div>
    </section>
  );
}
