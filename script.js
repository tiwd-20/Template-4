function classToggle() {
  const navs = document.querySelectorAll('.topnav')
  
  navs.forEach(nav => nav.classList.toggle('navbar__ToggleShow'));
}

document.querySelector('.nav-link-toggle').addEventListener('click', classToggle);