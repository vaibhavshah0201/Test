if (sessionStorage.getItem("adminName") != null) {
  document.getElementById("adminName").textContent = sessionStorage.getItem(
    "adminName"
  );
}

class User {
  nameRegex = /^[a-zA-Z]*$/;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  age = 0;
  constructor(name, email, password, birthDate) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.birthDate = birthDate;
    this.role = "subuser";
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
    if (this.password == "") {
      alert("Please Enter password");
      return false;
    }
    return true;
  }
  calcAge() {
    this.age =
      new Date().getFullYear() - new Date(this.birthDate).getFullYear();
  }

  getId() {
    userData = JSON.parse(sessionStorage.getItem("userData"));
    var newid = userData.length + 1;
    this.id = newid;
  }
}

if (sessionStorage.getItem("userData") == null) {
  userData = [];
  sessionStorage.setItem("userData", JSON.stringify(userData));
}

function addUser() {
  var name = userForm.txtUserName.value;
  var email = userForm.txtUserEmail.value;
  var password = userForm.txtUserPassword.value;
  var birthDate = userForm.txtUserBirthDate.value;

  var newUser = new User(name, email, password, birthDate);
  newUser.getId();
  if (newUser.validation()) {
    newUser.calcAge();
    userData = JSON.parse(sessionStorage.getItem("userData"));
    userData.push(newUser);
    sessionStorage.setItem("userData", JSON.stringify(userData));
    console.log("success");
  } else {
    console.log("validatin error");
  }
  window.location.reload();
}

displayUser();
function displayUser() {
  userData = JSON.parse(sessionStorage.getItem("userData"));
  for (var index = 0; index < userData.length; index++) {
    document.querySelector("#displayData").innerHTML += `<tr><td>${index +
      1}</td><td>${userData[index].name}</td><td>${
      userData[index].email
    }</td><td>${userData[index].password}</td><td>${
      userData[index].birthDate
    }</td><td>${
      userData[index].age
    }</td><td><input type="button" onclick="updateUser(${
      userData[index].id
    })" value="Edit"><input type="button" onclick="deleteUser(${
      userData[index].id
    })" value="Delete"></td></tr>`;
  }
}
function updateUser(updateId) {
  console.log(updateId);
  userData = JSON.parse(sessionStorage.getItem("userData"));
  for (var index = 0; index < userData.length; index++) {
    if (userData[index].id == updateId) {
      document.getElementById("userName").value = userData[index].name;
      document.getElementById("userEmail").value = userData[index].email;
      document.getElementById("userPassword").value = userData[index].password;
      document.getElementById("valueOfId").value = userData[index].id;
      document.getElementById("btnAdd").style.visibility = "hidden";
      document.getElementById("btnUpdate").style.visibility = "visible";
    }
  }
  // sessionStorage.setItem("userData", JSON.stringify(userData));
  // window.location.reload();
}

function deleteUser(deleteId) {
  console.log(deleteId);
  userData = JSON.parse(sessionStorage.getItem("userData"));
  for (var index = 0; index < userData.length; index++) {
    if (userData[index].id == deleteId) {
      userData.splice(index, 1);
      break;
    }
  }
  sessionStorage.setItem("userData", JSON.stringify(userData));
  window.location.reload();
}

function update() {
  var name = userForm.txtUserName.value;
  var email = userForm.txtUserEmail.value;
  var password = userForm.txtUserPassword.value;
  var birthDate = userForm.txtUserBirthDate.value;
  var updateid = userForm.userId.value;
  userData = JSON.parse(sessionStorage.getItem("userData"));

  for (var index = 0; index < userData.length; index++) {
    if (userData[index].id == updateid) {
      userData[index].name = name;
      userData[index].email = email;
      userData[index].password = password;
      userData[index].birthDate = birthDate;
      break;
    }
  }
  sessionStorage.setItem("userData", JSON.stringify(userData));
  window.location.reload();
}
