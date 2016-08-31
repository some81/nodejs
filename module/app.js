'use strict';

const Enigma = require('./enigma');
const eng = new Enigma('alek');

let encodeString = eng.encode("Alek's sleeping");
console.log("Encoded:", encodeString);

let decodeString = eng.decode(encodeString);
console.log("Decoded:", decodeString);

let qr = eng.qrgen("http://www.alex.com", "outImage.png");
qr ? console.log("Image created") : console.log("Image failed");


