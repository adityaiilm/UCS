let LoaderPage = document.querySelector("#loader")

setTimeout(function() {
    LoaderPage.style.top = "-100%"
},3000)


function signupPagePopUP(){
    
let SignUp_button = document.querySelector("#signbtn");
let Cancel_btn = document.querySelector("#cross");

//signup button
SignUp_button.addEventListener("click", () => {
    // alert("button clicked");
    document.querySelector(".OverlaySheet").classList.add("showoverlay");
    document.querySelector(".signup-page").classList.add("showsignup-page");
});

Cancel_btn.addEventListener("click", () => {
    document.querySelector(".OverlaySheet").classList.remove("showoverlay");
    document.querySelector(".signup-page").classList.remove("showsignup-page");
});
}
function profileDropdown(){
    let Profile_button = document.querySelector("#profile");
    let Menu =  document.querySelector(".dropdown");

//profile button dropdown
Profile_button.addEventListener("click", () => {
    Menu.classList.toggle("dropdownShow");
});

Profile_button.addEventListener("click", () => {
    if( Menu.classList.contains("dropdownShow")){
        Menu.classList.removes("dropdownShow")
    }
});
}

function chooseIdentity(){
    let C_individual = document.querySelector("#tbx1");
let C_organisation = document.querySelector("#tbx2");
//choose identity
C_individual.addEventListener("click", () => {
    alert("button clicked");
   
});

C_organisation.addEventListener("click", () => {
    alert("button clicked");
    
});
}
var switchbtn = document.getElementById("switch");

function leftClick(){
    switchbtn.style.left = 0;
}
function rightClick(){
    switchbtn.style.left = "150px";
    switchbtn.style.color = "white";
}

function importData() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
      // you can use this method to get file and perform respective operations
              let files =   Array.from(input.files);
              console.log(files);
          };
    input.click();
}

signupPagePopUP()
chooseIdentity()
profileDropdown()
