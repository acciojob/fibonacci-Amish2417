function fibonacci(num) {
// your code here
	let zeroth = 0;
	let first = 1;
	let second = 0;
	for(let i = 2;i<=num;i++){
		second = zeroth+first;
		zeroth = first;
		first = second;
	}
	return second;
}

module.exports = fibonacci;
