let navIcon = document.querySelector('.nav-menu-icon');
let sideMenu = document.querySelector('.side-menu');
let sideMenuCloseItem = document.querySelectorAll('.side-menu-close');



navIcon.addEventListener("click",()=>{
  if(sideMenu.classList.contains('side-menu-display')){
    sideMenu.classList.remove('side-menu-display')
  }
})
for (let i = 0; i < sideMenuCloseItem.length; i++) {
  // const element = sideMenuCloseItem[i];
  sideMenuCloseItem[i].addEventListener("click",()=>{
    if(sideMenu.classList.contains('side-menu-display') === false){
      sideMenu.classList.add('side-menu-display')
    }
  })
}
