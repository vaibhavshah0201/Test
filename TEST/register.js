class User {
  nameRegex = /^[a-zA-Z]*$/;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    name,
    email,
    password,
    confirmPassword,
    city,
    state,
    checktermCondtion
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.city = city;
    this.state = state;
    this.checktermCondtion = checktermCondtion;
    this.role = "admin";
  }

  validation() {
    if (this.nameRegex.test(this.name) == false) {
      alert("Please Enter valid name");
      return false;
    }
    if (this.emailRegex.test(this.email) == false) {
      alert("Please enter valid email");
      return false;
    }
    if (this.password == "" || this.confirmPassword == "") {
      alert("Please Enter password");
      return false;
    }
    if (this.password != this.confirmPassword) {
      alert("Please confirm the passwords");
      return false;
    }
    if (this.checktermCondtion == false) {
      alert("Please Checked This checkbox");
      return false;
    }
    return true;
  }
}

if (sessionStorage.getItem("userData") == null) {
  userData = [];
  sessionStorage.setItem("userData", JSON.stringify(userData));
}

function registerUser() {
  var name = registerForm.txtName.value;
  var email = registerForm.txtEmail.value;
  var password = registerForm.txtPassword.value;
  var confirmPassword = registerForm.txtConfirmPassword.value;
  var city = registerForm.dropdownCity.value;
  var state = registerForm.dropdownState.value;
  var checktermCondtion = document.querySelector("#checkTermsCondition")
    .checked;

  var admin = new User(
    name,
    email,
    password,
    confirmPassword,
    city,
    state,
    checktermCondtion
  );
  if (admin.validation()) {
    userData = JSON.parse(sessionStorage.getItem("userData"));
    // console.log(userData);
    userData.push(admin);
    sessionStorage.setItem("userData", JSON.stringify(userData));
    sessionStorage.setItem("registerBtnValue", 1);
    sessionStorage.setItem("adminName", name);
    window.location.href = "dashboard.html";
  } else {
    console.log("validation errror");
  }
}
