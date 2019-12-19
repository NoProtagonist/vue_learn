import CryptoJS from 'crypto-js'


export default {

    //AES 加密
    encryptByAES(message, key) {
        console.log(key + '-------------' + message)
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var encrypted = CryptoJS.AES.encrypt(message, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    },
    //AES 解密
    decryptByAES(ciphertext, key) {
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        // direct decrypt ciphertext
        var decrypted = CryptoJS.AES.decrypt({
            ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
        }, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}