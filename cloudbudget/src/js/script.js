//burger menu
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header-menu__items');
const menuItem = document.querySelectorAll('.header-menu__item');

if (iconMenu) {
	iconMenu.addEventListener('click', function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		
	})
	
};
menuItem.forEach(item => {
	item.addEventListener('click', () => {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
})

// if(iconMenu.classList.contains('_active')){
// 	document.body.classList.remove('_lock');
// 	iconMenu.classList.remove('_active');
// 	menuBody.classList.remove('_active');
// }

