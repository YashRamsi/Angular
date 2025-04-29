let arr = [10, 20, 30, 40, 50];

// splice(index , how many items to delete, Items to insert)
// 1.only delete    2.only insert    3.both delete and insert
arr.splice(2, 1);
console.log(arr);  //  [10, 20, 40, 50];

arr.splice(2, 0, 30);
console.log(arr);

arr.splice(1, 2, 25, 35);
console.log(arr);

let newArr = arr.toSpliced(1, 2);
console.log(arr, newArr)
