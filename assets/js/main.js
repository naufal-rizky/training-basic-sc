// Navbar
const navbar = document.querySelector(".navlist");
navbar.addEventListener('click', function(e) {
    const targetMenu = e.target;
    if(targetMenu.classList.contains('link-active')) {
        const menuLinkActive = document.querySelector("ul li a.active");
        if(menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href'))
        {
            menuLinkActive.classList.remove('active');
        }
        targetMenu.classList.add('active');
    }
});

// Responsive Navbar
const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

// scroll navbar
const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        console.log(sectionId);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
            .querySelector('li a[href*="' + sectionId + '"]')
            .classList.add('active');
        } else {
            document
            .querySelector('li a[href*="' + sectionId + '"]')
            .classList.remove('active')
        }
    });
});