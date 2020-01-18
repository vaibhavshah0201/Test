userData = JSON.parse(localStorage.getItem("userLog"));
for (var index = 0; index < userData.length; index++) {
  document.querySelector("#displayLog").innerHTML += `<tr><td>${index +
    1}</td><td>${userData[index].user}</td><td>${
    userData[index].loginDate
  }</td></tr>`;
}
userOutData = JSON.parse(localStorage.getItem("userLogOut"));
for (var index = 0; index < userOutData.length; index++) {
  document.querySelector("#displayLog").innerHTML += `<tr><td>${index +
    1}</td><td>${userOutData[index].logOutDate}</td></tr>`;
}
