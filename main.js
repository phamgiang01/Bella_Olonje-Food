const menuBtn = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');
let menuOpen = false;
menuBtn.addEventListener('click',()=>{
  
  if(!menuOpen){
    menuBtn.classList.add('open');
    menuList.classList.add('menu-mobile');
    menuOpen = true;
  }else{
    menuBtn.classList.remove('open');
    menuList.classList.remove('menu-mobile');
    menuOpen = false;
  }
})