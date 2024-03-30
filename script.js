function fibonacci(num) {
// your code here
	if(num==2){
		return 1;
	}
	if(num==1){
		return 0;
	}
	let first=fibonacci(num-1);
	let second=fibonacci(num-2);
	return first+second;
}

module.exports = fibonacci;
