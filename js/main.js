var user = document.getElementById("user");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirm = document.getElementById("confirm");

var user_error = document.getElementById('user_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');
var confirm_error = document.getElementById('confirm_error');

user.addEventListener('blur', userVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);

function Validate() {

  if (user.value == "") {
      user.style.border = "1px solid red";
      document.getElementById('user_div').style.color = "red";
      user_error.textContent = "Username required";
      user.focus();
    return false;
  } else if (user.value.length < 6){
      user.style.border = "1px solid red";
      document.getElementById('user_div').style.color = "red";
      user_error.textContent = "Username must be at least 6 characters";
      user.focus();
    return false;
  } else if (user.value.length > 20){
    user.style.border = "1px solid red";
      document.getElementById('user_div').style.color = "red";
      user_error.textContent = "Username is too long";
      user.focus();
    return false;
  } 

  if (email.value == "") {
      email.style.border = "1px solid red";
      document.getElementById('email_div').style.color = "red";
      email_error.textContent = "Email required";
      email.focus();
      return false;
  } else if (email.value.length < 4){
    email.style.border = "1px solid red";
      document.getElementById('email_div').style.color = "red";
      email_error.textContent = "Email must be at least 4 characters";
      email.focus();
    return false;
  } else if (email.value.length > 100){
    email.style.border = "1px solid red";
      document.getElementById('email_div').style.color = "red";
      email_error.textContent = "Email is too long";
      email.focus();
    return false;
  }

  if (password.value == "") {
      password.style.border = "1px solid red";
      document.getElementById('password_div').style.color = "red";
      password_error.textContent = "Password required";
      password.focus();
      return false;
  } else if (password.value.length < 6) {
    password.style.border = "1px solid red";
      document.getElementById('password_div').style.color = "red";
      password_error.textContent = "Password must be at least 6 characters";
      password.focus();
      return false;
  } else if (password.value.length > 20) {
    password.style.border = "1px solid red";
      document.getElementById('password_div').style.color = "red";
      password_error.textContent = "Password is too long";
      password.focus();
      return false;
  }

  if (confirm.value == "") {
      confirm.style.border = "1px solid red";
      document.getElementById('confirm_div').style.color = "red";
      confirm_error.textContent = "Confirmation required";
      confirm.focus();
      return false;
  }

  if (password.value != confirm.value) {
      password.style.border = "1px solid red";
      document.getElementById('confirm_div').style.color = "red";
      confirm.style.border = "1px solid red";
      confirm_error.innerHTML = "The two passwords do not match";
      return false;
  }
}

function userVerify() {
  if (user.value != "") {
   user.style.border = "none";
   document.getElementById('user_div').style.color = "#5e6e66";
   user_error.innerHTML = "";
   return true;
  }
}

function emailVerify() {
  if (email.value != "") {
    email.style.border = "none";
    document.getElementById('email_div').style.color = "#5e6e66";
    email_error.innerHTML = "";
    return true;
  }
}

function passwordVerify() {
  if (password.value != "") {
    password.style.border = "none";
    document.getElementById('confirm_div').style.color = "#5e6e66";
    document.getElementById('password_div').style.color = "#5e6e66";
    password_error.innerHTML = "";
    return true;
  }

  if (password.value === confirm.value) {
    password.style.border = "none";
    document.getElementById('confirm_div').style.color = "#5e6e66";
    password_error.innerHTML = "";
    confirm_error.innerHTML = "";
    return true;
  }
}

/*------------------------------------------------------------------------*/

const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
