const array2D = [
    [1, 2, 3],
    [4, 5, -6],
    [-7, 8, -9]
];

function negativeRow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if(arr.length > rowIdx) {
            setTimeout(() => {
                for(let i = 0; i< arr[rowIdx].length; i++) {
                    if(arr[rowIdx][i] < 0) {
                        resolve(arr[rowIdx]);
                    }
                }
            }, 0);
        } else {
            reject("index out of bound exception");
        }
    })
}
rowSumPromises = [];
for(let x=0 ; x < array2D.length;x++) {
    rowSumPromises.push(negativeRow(array2D,x));
}

Promise.any(rowSumPromises)
.then((row) => {
    console.log(row);
})
.catch((err) => console.log(err))