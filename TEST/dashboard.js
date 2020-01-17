if (sessionStorage.getItem("adminName") != null) {
  document.getElementById("adminName").textContent = sessionStorage.getItem(
    "adminName"
  );
}
smallerAge = 0;
midLineAGe = 0;
biggerAge = 0;

userData = JSON.parse(sessionStorage.getItem("userData"));
for (var index = 0; index < userData.length; index++) {
  if (userData[index].age < 18) {
    smallerAge++;
  } else if (userData[index].age > 18 && userData[index].age <= 50) {
    midLineAGe++;
  } else if (userData[index].age > 50) {
    biggerAge++;
  }
}
document.getElementById("smallAge").textContent = smallerAge;
document.getElementById("midAge").textContent = midLineAGe;
document.getElementById("bigAge").textContent = biggerAge;
