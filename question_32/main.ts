let current_users=["alyan","murtuza","daniyal","areeb","mavia"];
let new_users=["alyan","Hamza","osama","Kashif","hassan"];

for(let i=0;i<new_users.length;i++){
    if(new_users[i]==current_users[i]){
        console.log("You will need to enter a new user name.");
    }
    else{
        console.log("Username is available");
    }
}
