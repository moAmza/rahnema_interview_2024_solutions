import * as readline from "readline/promises";
import CryptoJS from "crypto-js";

const KEY = "TEST_KEY";

const encryptMessage = (message, key) =>
  CryptoJS.AES.encrypt(message, key).toString();

const decryptMessage = (message, key) =>
  CryptoJS.AES.decrypt(message, key).toString(CryptoJS.enc.Utf8);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const name = await rl.question("Please enter your name: ", {});
const password = encryptMessage(name, KEY);
console.log(`Your password is '${password}'`);

rl.close();
