var login = ["alyan", "admin", "murtuza", "daniyal", "hassan", "areeb"];
for (var i = 0; i < login.length; i++) {
    if (login[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(login[i], ", thank you for logging in again."));
    }
}
