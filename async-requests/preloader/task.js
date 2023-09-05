let items = document.getElementById('items');
let img = document.querySelector('.loader')
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.responseType = 'json';
xhr.send()
xhr.addEventListener('load', () => {

	img.classList.remove('loader_active');
	let xhrAnswer = xhr.response;
	let valute = xhrAnswer.response.Valute;

	for (let key in valute) {

		let charCode = valute[key].CharCode;
		let itemValue = valute[key].Value;
		items.insertAdjacentHTML("beforeEnd", `
                <div class="item">
                <div class="item__code">${charCode}</div>
                <div class="item__value">${itemValue}</div>
                <div class="item__currency">руб.</div>
                </div>
                `);
	}
})