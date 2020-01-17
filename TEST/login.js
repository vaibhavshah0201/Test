if(sessionStorage.getItem("registerBtnValue") == 1){
    document.getElementById('btnRegister').style.visibility = 'hidden';
}
if (localStorage.getItem("userLog") == null) {
    userLog = [];
    localStorage.setItem("userLog", JSON.stringify(userLog));
}

class LoginAgent {

    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    validation(){
        if (this.emailRegex.test(this.email) == false) {
            alert("Please enter valid email");
            return false;
        }
        return true;
    }

    checkCredentials(){
        var sessionData = JSON.parse(sessionStorage.getItem("userData"));
        for (var index = 0; index < sessionData.length; index++) {
            if(sessionData[index].email == this.email && sessionData[index].password == this.password){
                if(sessionData[index].role == "admin"){
                    window.location.href = "dashboard.html";

                }
                else if(sessionData[index].role == "subuser"){
                    window.location.href = "sub-user.html";
                    sessionStorage.setItem("userName",sessionData[index].name);
                    sessionStorage.setItem("userId",sessionData[index].id);
                    
                    this.userLog = JSON.parse(localStorage.getItem("userLog"));
                    console.log(this.userLog);
                    var loginLog = {
                        user : sessionData[index].name,
                        loginDate : new Date().toString()
                    }
                    
                    this.userLog.push(loginLog);
                    localStorage.setItem("userLog", JSON.stringify(this.userLog));

                    // sessionStorage.setItem("userData", JSON.stringify(userData));
                }
                break;
            }else
            {
                document.getElementById('invalid').textContent = "Invalid Id or Password";
            }
          
        }
        // console.log(sessionData);

    }


}

function loginUser(){
    var email = loginFrom.txtLoginEmail.value;
    var password = loginFrom.txtLoginPassword.value;

    var activeUser = new LoginAgent(email,password);
    if(activeUser.validation()){
        // if(activeUser.checkCredentials()){
        activeUser.checkCredentials();
        // }
    
    }
}