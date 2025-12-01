// Create a variable named `automobiles` that contains car, truck, motorcycle
const automobiles = ['car', 'truck', 'motorcycle'];

// Add `airplane` and `skateboard` to the end of `automobiles`
automobiles.push('airplane', 'skateboard');

// Add `bike` and `helicopter` to the front of `automobiles`
automobiles.unshift('bike', 'helicopter');

// Define `automobilesCopy` as a template string that contains `automobiles`
const automobilesCopy = `Automobiles: ${automobiles}`;

// Create a constant named `MAX_CAPACITY` and set it to 500
const MAX_CAPACITY = 500;

// Remove the last item from the end of `automobiles`
automobiles.pop();

// Remove the first item from the front of `automobiles`
automobiles.shift();

// Assign the innerHTML of the element with id `result` to `MAX_CAPACITY`
const resultEl = document.getElementById('result');
if (resultEl) {
	resultEl.innerHTML = MAX_CAPACITY;
}

// Export for tests (if run in Node environment)
try {
	module.exports = { automobiles, automobilesCopy, MAX_CAPACITY };
} catch (e) {}

