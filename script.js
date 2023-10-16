function toggleNav(){
    var sideNav = document.querySelector('.sidenav');
    sidenav.classList.toggle("open");
}
var toggleButton = document.querySelector("#toggle-button");
toggleButton.addEventListener("click",toggleNav);