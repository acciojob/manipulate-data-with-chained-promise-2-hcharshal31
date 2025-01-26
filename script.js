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
		item => item % 2 !== 0
	);
	resolve(filteredArr);
});
}

function promise3(data3){ 
    return new Promise(resolve =>{
        data3.forEach(item => {
            item *= 2
        });
        resolve(data3);
    });
}

let arr = promise1(myArr)
.then((data) =>{
    return promise2(data);
})
.then((data) =>{
    return promise3(data);
});

let output = document.getElementById("output");
output.textContent = arr;