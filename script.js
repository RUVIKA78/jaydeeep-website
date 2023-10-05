const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function loadingAnimaton() {
    gsap.from(".part-one h1", {
        // x:30,
        y: 20,
    
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.2,
    })
    gsap.from(".part-one h3", {
        // x:30,
        y: 20,
    
        opacity: 0,
        delay: 1,
        duration: 1,
        stagger: 0.2,
    })
    
}
loadingAnimaton()

// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.getElementsByClassName('.menu-toggle');
//     const menu = document.getElementsByClassName('.items');

//     menuToggle.addEventListener('click', function() {
//         menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
//     });
// });

const menu_btn = document.querySelector('i');
	const mobile_menu = document.querySelector('.items');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});