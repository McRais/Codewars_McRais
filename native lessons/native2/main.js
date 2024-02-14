const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
/*
желаемый результат
 const names = ["Bob", "Alex", "Nick", "John"]
*/
/*
const getNames = function(array) {
    let namesArray = []
    for (let i = 0; i < array.length; i++){
        namesArray.push(array[i].name)
    }
    return namesArray
}
console.log(getNames(students))
*/

//добавить каждому студенту isStudent = true
/*
let updatedStudents = [];

const getUpdatedStudents = function(array){
    let newArray = array
    for (let i = 0; i < array.length; i++){
        newArray[i].isStudent = true
    }
    return newArray
}
updatedStudents = getUpdatedStudents(students);
console.log(updatedStudents)
*/

const getMappedArray = (array, getValueForResult) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = getValueForResult(array[i])
    }
    return result
}
console.log(getMappedArray(students, (el) => el.name))
console.log(getMappedArray(students, (el) => ({...el, isStudent:  true})))

console.log(students.map((el) => el.name))
console.log(students.map((el) => ({...el, isStudent:  true})))


//фильтр
const getFilteredArray = function (array, condition){
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i]) === true){
            result[result.length] = array[i]
        }
    }
    return result
}
console.log(getFilteredArray(students, el => el.age > 20))
console.log(students.filter(el => el.age > 20))

