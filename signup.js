function validateForm() {
  // ===== Request Data Gathering Logic =====
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let mobile = document.getElementById("mobile").value;
  let dob = document.getElementById("dob").value;
  let address = document.getElementById("address").value.trim();
  let qualification = document.getElementById("qualification").value;

  let gender = document.querySelector('input[name="gender"]:checked');
  let skills = document.querySelectorAll(".skills:checked");

  // ===== Validation Logic =====

  if (username === "") {
    alert("Please enter username");
    return false;
  }

  if (password === "") {
    alert("Please enter password");
    return false;
  }

  if (password.length < 8) {
    alert("Password should be minimum 8 characters");
    return false;
  }

  // Uppercase + lowercase validation
  let regexp = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!regexp.test(password)) {
    alert("Password must contain uppercase and lowercase letters");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Password and Confirm Password should be same");
    return false;
  }

  if (!gender) {
    alert("Please select gender");
    return false;
  }

  // Mobile validation (exact 10 digits)
  let regexp1 = /^[0-9]{10}$/;
  if (!regexp1.test(mobile)) {
    alert("Please enter valid 10 digit mobile number");
    return false;
  }

  if (dob === "") {
    alert("Please select Date of Birth");
    return false;
  }

  if (address === "") {
    alert("Please enter address");
    return false;
  }

  if (qualification === "") {
    alert("Please select qualification");
    return false;
  }

  if (skills.length === 0) {
    alert("Please select atleast one skill");
    return false;
  }

  alert("Registration successful!");
  return true; // 
}
