document.getElementById("processButton").addEventListener("click", function () {
   const fileInput = document.getElementById("fileInput");
   const outputDiv = document.getElementById("output");
   outputDiv.innerHTML = ""; // Clear previous output

   if (fileInput.files.length === 0) {
      outputDiv.textContent = "Please select one or more image files.";
      return;
   }

   Array.from(fileInput.files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = function (event) {
         Tesseract.recognize(event.target.result, "eng", {
            logger: (info) => console.log(info), // Log progress
         })
            .then(({ data: { text } }) => {
               const imageOutput = document.createElement("div");
               imageOutput.className = "image-output";
               imageOutput.textContent = `Text from ${file.name}:\n${text}`;
               outputDiv.appendChild(imageOutput);
            })
            .catch((err) => {
               console.error(err);
               const imageOutput = document.createElement("div");
               imageOutput.className = "image-output";
               imageOutput.textContent = `Error processing ${file.name}: ${err.message}`;
               outputDiv.appendChild(imageOutput);
            });
      };
      reader.readAsDataURL(file);
   });
});
