import CryptoJS from "crypto-js";

// Encrypt message
export const encryptMessage = (message, password) => {
  try {
    return CryptoJS.AES.encrypt(message, password).toString();
  } catch (err) {
    console.error("Encryption failed:", err);
    return null;
  }
};

// Decrypt message
export const decryptMessage = (cipherText, password) => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, password);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText || null;
  } catch (err) {
    console.error("Decryption failed:", err);
    return null;
  }
};
