function fibonacci(num) {
// your code here
	let zeroth = 0;
	let first = 1;
	let second = 0;
	for(let i = 2;i<=num;i++){
		second = zeroth%1000000007+first%1000000007;
		zeroth = first%1000000007;
		first = second%1000000007;
	}
	return second%1000000007;
}

module.exports = fibonacci;
