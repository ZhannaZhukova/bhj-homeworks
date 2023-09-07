let modal = document.getElementById('subscribe-modal');
modal.classList.add('modal_active');
let modalClose = document.querySelector('.modal__close');
window.onload = function() {
	if (document.cookie.indexOf("name") == 0) {
		modal.classList.remove('modal_active')
	}
	modalClose.addEventListener('click', event => {
		event.preventDefault();
		let target = event.target;
		target.closest('.modal').classList.remove('modal_active');
		let today = new Date();
		let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
		let dayTomorrow = tomorrow;
		document.cookie = `name=close; ${dayTomorrow}`;
	})
}