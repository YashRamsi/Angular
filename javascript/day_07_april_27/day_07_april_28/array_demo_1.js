let students = ['Rahul', 'Venkat', 'Akshay', 'Kishore'];

// 1. for
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
console.log('=================');

// 2. for-in loop
for (i in students) {
    console.log(students[i]);
}
console.log('=================');

// 3. for-of
for (val of students) {
    console.log(val)
}
console.log('=================');

// 4. forEach()
students.forEach((val, ind, arr) => {
    console.log(val, ind, arr);
});