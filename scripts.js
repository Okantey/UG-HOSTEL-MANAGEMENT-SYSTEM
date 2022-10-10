function validateForm() {
  let x = document.forms["loginForm"]["email" && ["password"]].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

// biometrics

const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#biometric-photo").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
