
//Check if menu has been clicked
const menuButton = document.getElementById("masterContent");
const menuImg = document.getElementById("menuButton");
const sideBar = document.getElementById("sidebar");

const header = document.getElementById("logo");
const mainBody = document.getElementById("main");

menuButton.onclick = sidebarOpenClose;


function sidebarOpenClose() {
    if (sideBar.classList.contains("unopen")){
        sideBar.classList.remove("unopen")
        sideBar.classList.add("open")

        menuButton.classList.remove("unopen");
        menuButton.classList.add("open")

        menuImg.classList.remove("unopen");
        menuImg.classList.add("open")

        header.classList.add("open")
        mainBody.classList.add("open")
    }else{
        sideBar.classList.add("unopen")
        sideBar.classList.remove("open")

        menuButton.classList.add("unopen");
        menuButton.classList.remove("open");

        menuImg.classList.add("unopen");
        menuImg.classList.remove("open");

        header.classList.remove("open")
        mainBody.classList.remove("open")
    }   
}