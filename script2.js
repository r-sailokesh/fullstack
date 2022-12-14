function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (
    username == null ||
    username == "" ||
    username.length <= 8 ||
    username.charCodeAt(0) < 65 ||
    username.charCodeAt(0) > 90
  ) {
    alert(
      "Username or Password can't be blank or Username must have more than 8 digits or Username must start with a capital letter."
    );
    return false;
  } else if (password.length < 6 || password.search(/[@#$%]/) == -1) {
    alert("Password must be at least 6 characters long and must cosist of atleast one special character.");
    return false;
  }
  return true;
}
