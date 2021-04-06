//1
let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
let arr3 = arr1.concat(arr2);
console.log(arr3);

//2
arr2.forEach(element => {
    arr1.push(element);
});
console.log(arr1);

//3
let arr4 = arr2.reverse();
console.log(arr4);

//4
let arr5 = [1, 2, 3, 4, 5];
let arr6 = arr5.slice(0,3);
console.log(arr6);

//5 
let arr7 = arr5.slice(3,5);
console.log(arr7);

//6
let obj = {js:'test', jq: 'hello', css: 'world'};
let objKeys = Object.keys(obj);
console.log(objKeys);

//7
let reverse = (array) => {
    var result = [];
    while (array.length) {
        result.push(array.pop());
    }

    return result;
  }

console.log(reverse(arr5));

//8
let twoDimArr = [[1, 2, 3], [4, 5], [6], [1,1,1]];
let sum = 0;

for(let i = 0; i < twoDimArr.length; i++) {
    for(let j = 0; j < twoDimArr[i].length; j++){
        sum += twoDimArr[i][j];
    }
}

console.log(sum);

//9
let threeDimArr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum2 = 0;

for(let i = 0; i < threeDimArr.length; i++) {
    for(let j = 0; j < threeDimArr[i].length; j++){
        for(let k = 0; k < threeDimArr[i][j].length; k++){
            sum2 += threeDimArr[i][j][k];
        }
    }
}

console.log(sum2);

//10
let arraysEqual = (arr1, arr2) => {

	if (arr1.length !== arr2.length) return false;

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	return true;
};

let arr8 = [1,2,3,4,5,6];
let arr9 = [1,2,3,4,5,6];
let arr10 = [1,2,3,4,5,7];

console.log(arraysEqual(arr8,arr9));
console.log(arraysEqual(arr8,arr10));

//11
let arr11 = [3, 4, 9];
let squares = arr11.map(function(num) {
  return num * num;
});

console.log(squares);

//12
let arr12 = [1,2,-3,4,-5,6];

let result = arr12.filter(num => num < 0);

console.log(result);

//13
let total = arr12.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log(total);
