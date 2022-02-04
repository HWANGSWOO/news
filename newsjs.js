


const hideBtn = document.getElementById('hideBtn');
const viewBtn = document.getElementById('viewBtn');
const divList = document.querySelector('.firstmain');

hideBtn.addEventListener('click', () => {

		divList.style.display = 'none'
	
});

viewBtn.addEventListener('click', () => {

		divList.style.display = 'block'
	
});

