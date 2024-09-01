let $password = document.querySelector(".password");
let $submit = document.querySelector(".submit");
let $email = document.querySelector(".email");
let users = {};
function User(email,password){
    this.$email = $email;
    this.$password=$password;
}
function createId(users){
    return Object.keys(users).length;
}
$submit.addEventListener("click", ()=>{
    const $emailUser = $email.value;
    const $passwordUser = $password.value;

    const  user = new User (emailUser,passwordUser);

    const userId = "User" +createId(users);
    users[userId] = user;
    console.log(users);
})
  $email.addEventListener("input",  ()=>{
    const emailBox = document.querySelector(".emailBox");
    const emailText = document.querySelector(".emailText");
    if($email.value.match($emailText)){
        $emailBox.classList.add("valid");
        $emailBox.classList.remove("invalid");
        $emailText.innerHTML = "Field is required"
    }else{
        $emailBox.classList.add("invalid");
        $emailBox.classList.remove("valid");
        $emailText.innerHTML = "Field is required";
    }
});
$password.addEventListener("input", ()=>{
    const passBox = document.querySelector(".passBox");
    const passText = document.querySelector(".passText");
    if($password.value.match(passText)){
        $passBox.classList.add("valid");
        $passBox.classList.remove("invalid");
        $passText.innerHTML = "Field is required"
    }else{
        $passBox.classList.add("invalid");
        $passBox.classList.remove("valid");
        $passText.innerHTML = "Field is required";
    }
});