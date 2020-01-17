userData = JSON.parse(localStorage.getItem("userLog"));
    for (var index = 0; index < userData.length; index++) {
            document.querySelector("#displayLog").innerHTML += `<tr><td>${index +
                1}</td><td>${userData[index].user}</td><td>${
                userData[index].loginDate
                }</td></tr>`;
        
        
    }
