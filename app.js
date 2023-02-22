let h2Id = document.getElementById('h2')
let buttonId = document.getElementById('button')
let buttonReset = document.getElementById('button-reset')
let buttonX2 = document.getElementById('button-x2')
let buttonX4 = document.getElementById('button-x4')
let buttonX6 = document.getElementById('button-x6')
let counter = 0
let bosts = 1

buttonId.addEventListener('click', function() {
	foo()
})

buttonId.addEventListener('click', function() {
	counter += bosts;
	foo()
})

buttonX2.addEventListener('click', function() {
	bosts = 2;
})

buttonX4.addEventListener('click', function() {
	bosts = 4;
})

buttonX6.addEventListener('click', function() {
	bosts = 6;
})

buttonReset.addEventListener('click', function() {
	counter = 0;
	bosts = 1;
	foo();
})

const foo = ()=>h2Id.textContent = 'Печенья: ' + counter;