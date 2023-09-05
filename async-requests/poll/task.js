let pollAnswers = document.querySelector('.poll__answers_active');
let pollTitle = document.querySelector('.poll__title');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();
xhr.addEventListener('load', () => {
	let xhrAnswer = xhr.response;
	pollTitle.innerText = xhrAnswer.data.title;

	let answers = xhrAnswer.data.answers;
	for (let i = 0; i < answers.length; i++) {
		pollAnswers.insertAdjacentHTML("beforeend",
			`
            <button class="poll__answer">${answers[i]}</button>
            `
		);
	}
	let button = document.querySelectorAll('.poll__answer');
	button.forEach(elem => {
		elem.addEventListener('click', event => {
			event.preventDefault();
			alert('Спасибо, ваш голос засчитан!');
		})
	})
})