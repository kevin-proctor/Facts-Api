function login(login_name,login_password) {
    let username: string = login_name.value;
    let password: string = login_password.value;
    let correct: number = 0;
    let wrong: number = 1;

    let usernames: string[] = ["username1", "username2", "username3"];
    let passwords: string[] = ["password1", "password2", "password3"];

    for (let i:number = 0; i <= usernames.length; i++){
        if ((username != usernames[i]) && (password != passwords[i])){
            correct = 1;
        }
    }

    if (correct === 1)
    {
        window.location.href="facts.html";
        wrong = 0;
    }

    else {
        alert ("Access Denied");
        correct = 0;
    }
};