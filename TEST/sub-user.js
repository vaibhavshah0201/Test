if (sessionStorage.getItem("userName") != null) {
  document.getElementById("userName").textContent = sessionStorage.getItem(
    "userName"
  );
}

var currentUserId = sessionStorage.getItem("userId");
userData = JSON.parse(sessionStorage.getItem("userData"));
for (var index = 0; index < userData.length; index++) {
  if (userData[index].id == currentUserId) {
    var userMonth = new Date(userData[index].birthDate).getMonth();
    var currentMonth = new Date().getMonth();
    var userDate = new Date(userData[index].birthDate).getDate();
    var currentDate = new Date().getDate();
    if (userDate == currentDate && userMonth == currentMonth) {
      document.getElementById("birthday").textContent = "Happy Birthday";
      break;
    }
  }
}
