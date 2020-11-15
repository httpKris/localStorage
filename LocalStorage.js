const myNumber = 42
localStorage.removeItem('number')
console.log(localStorage.getItem('number'))
localStorage.setItem('number', myNumber.toString())
console.log(localStorage.getItem('number'))
localStorage.clear()

const object = {
	name: 'V',
	age: 20,
}

localStorage.setItem('person', JSON.stringify(object))

const raw = localStorage.getItem('person')

const person = JSON.parse(raw)
person.name = 'Kristina'
console.log(person)

//----------------//
window.addEventListener('storage', (e) => {
	console.log(e);
})