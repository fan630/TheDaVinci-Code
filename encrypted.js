const CryptoJS = require("crypto-js");

const keyToEncrypt = "6fLpjrJ1i0y59V5j4FpFEQPgtU3CxuAR77opl8rSOFPUV827XUu8JQQJ99BGAC3pKaRXJ3w3AAAYACOG8AAF";
const password = "mySecret123";

const encrypted = CryptoJS.AES.encrypt(keyToEncrypt, password).toString();
console.log(encrypted);