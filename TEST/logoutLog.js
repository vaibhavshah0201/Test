if (localStorage.getItem("userLogOut") == null) {
  userLog = [];
  localStorage.setItem("userLogOut", JSON.stringify(userLog));
}

function logoutLog() {
  var currentUserId = sessionStorage.getItem("userId");
  var userName = sessionStorage.getItem("userName");

  userLog = JSON.parse(localStorage.getItem("userLogOut"));
  console.log(this.userLog);
  var logOutLog = {
    id: currentUserId,
    user: userName,
    logOutDate: new Date().toString()
  };
  console.log(logOutLog);
  userLog.push(logOutLog);
  localStorage.setItem("userLogOut", JSON.stringify(this.userLog));
}
