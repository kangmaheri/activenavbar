let menu_active = document.querySelectorAll(".menu li a");
for (let i = 0; i < menu_active.length; i++) {
  const element = menu_active[i];
  element.addEventListener('click', function(){
    for (let j = 0; j < menu_active.length; j++) {
      const elementj = menu_active[j];
      elementj.classList.remove('nav__active')
    }
    element.classList.add('nav__active')
  })
}
