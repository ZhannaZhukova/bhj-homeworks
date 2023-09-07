let form = document.getElementById('signin__form');
let btn = document.getElementById('signin__btn');
let signIn = document.getElementById('signin');
let welcome = document.getElementById('welcome');
let userId = document.getElementById('user_id');

if (localStorage.getItem('user_id')) {
	signIn.classList.remove('signin_active');
	welcome.classList.add('welcome_active');
	userId.innerText = localStorage.getItem('user_id');
}
form.addEventListener("submit", (e) => {
	e.preventDefault();

	let xhr = new XMLHttpRequest();
	let formData = new FormData(form);
	xhr.addEventListener('load', () => {
		let xhrAnswer = xhr.response;
		let id = xhrAnswer.user_id;
		if (xhrAnswer.success === false) {
			alert('Неверный логин или пароль');
		} else {
			localStorage.setItem('user_id', id);
			signIn.classList.remove('signin_active');
			welcome.classList.add('welcome_active');
			userId.innerText = localStorage.getItem('user_id');
		}
	})
	xhr.responseType = 'json';
	xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
	xhr.send(formData);
})