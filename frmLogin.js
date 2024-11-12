const btnLogin = document.querySelector("#btnLogin");
const txtUsername = document.querySelector("#txtUsername");
const txtPassword = document.querySelector("#txtPassword");
let user;
let pass;
function Login() {
  user = txtUsername.value;
  pass = txtPassword.value;
  if (user === "a" && pass === "a") {
    alert("Login is successed.");
  } else {
    alert("Invalid Username or Password");
  }
}
const txtForgetPass = document.querySelector("#txtForgetPass");
const txtCreateAcc = document.querySelector("#txtCreateAcc");
txtForgetPass.onclick = function () {
  user = txtUsername.value;
  pass = txtPassword.value;
  alert(`${user} is foorgot password.`);
};
txtCreateAcc.onclick = function () {
  user = txtUsername.value;
  pass = txtPassword.value;
  alert("Welcome to SAW 🫡")
};
