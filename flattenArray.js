/*
Implement this - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
*/

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const main = (arr4, depth) => {
	const tempArr = [];
	const flattenArr = (arr, depth) => {
		arr.forEach((el) => {
			if (typeof el === "object" && depth !== 0) {
				flattenArr(el, depth - 1);
			} else {
				tempArr.push(el);
			}
		});
	};
	flattenArr(arr4, depth);
	return tempArr;
};

console.log(main(arr4, 4));
console.log(main(arr4, 3));
console.log(main(arr4, 2));

// console.log(flattenArr(arr4, 1));
// console.log(flattenArr(arr4, 2));
