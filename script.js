let output = document.getElementById("output");

let myArr = [1, 2, 3, 4];

function promise1(data1){
    return new Promise(resolve => {
		setTimeout(()=>{
			resolve(data1);
		}, 3000);
	});
}

function promise2(data2){
    return new Promise(resolve => {
	let filteredArr = data2.filter(
		item => item % 2 === 0
	);
	resolve(filteredArr);
});
}

function promise3(data3){ 
    return new Promise(resolve =>{
        let multipliedArr = data3.map(item => {
            item *= 2
        });
        resolve(multipliedArr);
    });
}

promise1(myArr)
.then(data => {
    return promise2(data);
})
.then(data => {
	setTimeout(()=>{
		output.textContent = data;
	}, 1000);
    return promise3(data);
}).then(data => {
	setTimeout(()=>{
		output.textContent = data;
	}, 2000);
});
// output.textContent = arr;