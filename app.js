let h2Id = document.getElementById('h2')
let buttonId = document.getElementById('button')
let buttonReset = document.getElementById('button-reset')
let buttonX2 = document.getElementById('button-x2')
let buttonX4 = document.getElementById('button-x4')
let buttonX6 = document.getElementById('button-x6')
let counter = 0

buttonId.addEventListener('click', function() {
	counter = counter + 1
	h2Id.textContent = 'Печенья: ' + counter
})

buttonX2.addEventListener('click', function() {
	buttonId.addEventListener('click', function() {
		counter = counter + 1
		h2Id.textContent = 'Печенья: ' + counter
	})
})

buttonX4.addEventListener('click', function() {
	buttonId.addEventListener('click', function() {
		counter = counter + 3
		h2Id.textContent = 'Печенья: ' + counter
	})
})

buttonX6.addEventListener('click', function() {
	buttonId.addEventListener('click', function() {
		counter = counter + 5
		h2Id.textContent = 'Печенья: ' + counter
	})
})

buttonReset.addEventListener('click', function() {
	counter = 0
	h2Id.textContent = 'Печенья: ' + counter
})