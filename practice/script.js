const preview = (event) => {
  // get the selected files
  const imgFiles = event.target.files;
  // get how many files are selected
  const imgUploaded = imgFiles.length;
  // if there is atleast one file selected ,then the following will be used
  if (imgFiles.length > 0) {
    //  create img url
    const imgSrc = URL.createObjectURL(imgFiles[0]);
    // put the url path to the img src
    const previewImg = document.querySelector("#preview-img");
    previewImg.src = imgSrc;

    previewImg.style.display = "block";
  }
};
