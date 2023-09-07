let editor = document.getElementById('editor');
let buttonClear = document.getElementById('button');
buttonClear.addEventListener('click', () => {
	localStorage.removeItem('text');
	editor.value = '';
})
editor.addEventListener('input', (e) => {
	localStorage.setItem('text', editor.value)
})
window.onload = function() {
	editor.value = localStorage.getItem('text')
}