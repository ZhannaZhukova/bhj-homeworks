let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let progress = document.getElementById("progress");

	let xhr = new XMLHttpRequest();
	xhr.upload.onprogress = function(e) {
		progress.value = e.loaded / e.total;
	}

	let formData = new FormData(form);

	xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
	xhr.send(formData);
});