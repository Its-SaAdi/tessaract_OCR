const Tesseract = require("tesseract.js");

const imagePath = "./images/text-image-13.jpeg";

Tesseract.recognize(imagePath, "eng", {
   logger: (info) => console.log(info),
})
   .then(({ data: { text } }) => console.log(text))
   .catch((err) => console.log(err));

// const images = [
//    "./images/text-image-1.jpeg",
//    "./images/text-image-2.jpeg",
//    "./images/text-image-3.jpeg",
//    "./images/text-image-11.jpeg",
//    "./images/text-image-14.jpeg",
//    "./images/text-image-7.jpeg",
//    "./images/text-image-9.jpeg",
//    "./images/text-image-10.jpeg",
// ]

// images.forEach(img => {
//    Tesseract.recognize(img, "eng", {
//       logger: (info) => console.log(info),
//    })
//       .then(({ data: { text } }) => console.log(text))
//       .catch((err) => console.log(err));
// });
