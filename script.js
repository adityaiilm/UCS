let SignUp_button = document.querySelector("#signbtn");

let Profile_button = document.querySelector("#profile");
let Menu =  document.querySelector(".dropdown");

//signup button
SignUp_button.addEventListener("click", () => {
    alert("button clicked");
    document.querySelector(".OverlaySheet").classList.add("showoverlay");
    document.querySelector(".signup-page").classList.add("showsignup-page");
})

//profile button dropdown
Profile_button.addEventListener("click", () => {
    Menu.classList.toggle("dropdownShow");
});

Profile_button.addEventListener("click", () => {
    if( Menu.classList.contains("dropdownShow")){
       Menu.classList.removes("dropdownShow")
    }
});
