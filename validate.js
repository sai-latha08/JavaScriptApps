//js validations
function validate() {
  //request data gathering logic
  let uname = document.getElementById("name").value;
  let upassw = document.getElementById("password").value;
  let cnfpass = document.getElementById("confirmpassword").value;
  let mobileno = document.getElementById("phoneno").value;
  let regexp = /[a-z][A-Z]/;
  let regexp1 = /[0-9]{10}/;
  //form validation logic
  if (uname == "") {
    alert("Boss please enter the name!!");
    return false;
  }
  if (upassw == "") {
    alert("Boss please enter password");
    return false;
  }
  if (upassw.length < 8 || upassw.length > 12) {
    alert("password should be  minimum 8 characters");
    return false;
  }
  if (!regexp.test(upassdw)) {
    alert("password combination of small,caps letters");
    return false;
  }
  if (cnfpass == "") {
    alert("please re - enter the password");
    return false;
  }
  if (cnfpass != upassw) {
    alert("password should match");
  }
  if (mobileno == "") {
    alert("please enter mobile number");
    return false;
  }
  if (!regexp1.test(mobileno)) {
    alert("enter valid mobileno");
    return false;
  }
  return true;
}
