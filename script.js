let SignUp_button = document.querySelector("#signbtn");
let Cancel_btn = document.querySelector("#cross");

let Profile_button = document.querySelector("#profile");
let Menu =  document.querySelector(".dropdown");

//signup button
SignUp_button.addEventListener("click", () => {
    // alert("button clicked");
    document.querySelector(".OverlaySheet").classList.add("showoverlay");
    document.querySelector(".signup-page").classList.add("showsignup-page");
})

Cancel_btn.addEventListener("click", () => {
    document.querySelector(".OverlaySheet").classList.remove("showoverlay");
    document.querySelector(".signup-page").classList.remove("showsignup-page");
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
