//const number1 = prompt('number1')
//const number2 = prompt('number2')
//const hasilBagi = number1 / number2
//alert('Hasil Bagi:' + hasilBagi)



//const usiaAyah = 60
//const usiaIbu = 45
//console.log('USIA', usiaAyah + usiaIbu)


// const score = true
// const attendance = false
// const attitude = false

// const result = attendance || attitude || score
// console.log(result)

// if (score == true){
//     console.log('Lulus')
// }else{
//     console.log('Tidak Lulus')
// }

const cars = ['ayla', 'sigra', 'avanza', 'calya']
// console.log('MOBIL', cars)
// console.log('index ke 0', cars [0])
// console.log('index ke 1', cars [1])
// console.log('JUMLAH DATA', cars.length)
// console.log('REVERSE', cars.reverse())
// console.log('SORT', cars.sort())
// console.log('POP', cars.pop())

var scores =[
    [10, 20, 30],
    [15, 25, 35],
    [1, 3, 5]
]


console.log(scores[0][0]);
console.log(scores[1][0]);

//loop
for (let i = 1; i <= cars.length; i++){
    console.log(cars[i - 1])
}

// for (let i = 1; i <= cars.length; i++){
//     console.log(cars[i - 1])
// }


//type function declaration
// function logger(name, age){
//     console.log(name, age)
// }

// logger('Dwi', 37)
// logger('Gerald', 17)

//type function Expression
const logger = function(name, age){
    const result = `Nama : ${name} dan usia ${age}`
    return result
}
const input = logger('Dewa', 28)
console.log(input)


//arrow function
const logger2 = (nama, age) => {
    const result = `Nama : ${nama} dan usia ${age}`
    return result
}
console.log(logger2('Dwi', 27))

//check AGE

const checkAge = (born) => {
    const now = 2022
    const result = now - born
    return result
}

console.log(checkAge(2002))