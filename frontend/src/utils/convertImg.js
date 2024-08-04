/** @format */

export const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      if (fileReader.result) {
        resolve(fileReader.result.toString());
      } else {
        reject("Error in reading file.");
      }
    };
    fileReader.onerror = (event) => {
      reject(`Error in reading file: ${event}`);
    };
  });
};
