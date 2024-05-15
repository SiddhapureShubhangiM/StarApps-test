document.addEventListener("DOMContentLoaded", function () {
  const umbrellaImage = document.getElementById("umbrella-image");
  const logoImage = document.getElementById("logo-image");
  const colorButtons = document.querySelectorAll(".color");
  const logoUpload = document.getElementById("logo-upload");
  const removeFileSpan = document.getElementById("remove-file");
  const loaderIcon = document.getElementById("loader-icon");

  colorButtons.forEach((button) => {
    button.addEventListener("click", function () {
      loaderIcon.src = `images/loader_icon.svg`;
      loaderIcon.style.display = "block";
      const color = this.getAttribute("data-color");
      umbrellaImage.style.display = "none";
      document.body.style.backgroundColor = getColorBg(color);
      logoUpload.style.background = getColorBt(color);
      setTimeout(() => {
        umbrellaImage.style.display = "block";
        umbrellaImage.src = `images/${color} umbrella.png`;
        loaderIcon.style.display = "none";
      }, 2000);
    });
  });

  logoUpload.addEventListener("change", handleFileSelect);

  function handleFileSelect(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (event) {
        logoImage.src = event.target.result;
        logoImage.style.display = "block";
        removeFileSpan.style.display = "block";
      };

      reader.readAsDataURL(file);
    }
  }

  removeFileSpan.addEventListener("click", function () {
    logoImage.src = "";
    logoImage.style.display = "none";
    removeFileSpan.style.display = "none";
    logoUpload.value = "";
  });



  function getColorBt(color) {
    switch (color) {
      case "pink":
        return "#d9328b";
      case "blue":
        return "#00a3e0";
      case "yellow":
        return "#fed24a";
      default:
        return "#FFF";
    }
  }
  
  function getColorBg(color) {
    switch (color) {
      case "pink":
        return "#d0006f66";
      case "blue":
        return "rgb(41 177 228 / 30%)";
      case "yellow":
        return "#fed14182";
      default:
        return "#FFF";
    }
  }
});
