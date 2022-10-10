function validateForm() {
  let x = document.forms["loginForm"]["email" && ["password"]].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
