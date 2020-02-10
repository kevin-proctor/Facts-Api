function login(login_name, login_password) {
    var username = login_name.value;
    var password = login_password.value;
    console.log(username);
    var correct = 0;
    var wrong = 1;
    var usernames = ["username1", "username2", "username3"];
    var passwords = ["password1", "password2", "password3"];
    for (var i = 0; i <= usernames.length; i++) {
        if ((username != usernames[i]) && (password != passwords[i])) {
            correct = 1;
        }
    }
    if (correct === 1) {
        window.location.href = "facts.html";
        wrong = 0;
    }
    else {
        alert("Access Denied");
        correct = 0;
    }
}
;
