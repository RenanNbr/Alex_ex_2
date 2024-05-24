function processNumber(numbers, filter_callback, map_callback, reduce_callback){
    const filtered_numbers = numbers.filter(filter_callback)
    const mapped_numbers = filtered_numbers.map(map_callback)
    const reduce_callback = mapped_numbers.reduce(reduce_callback, 0)

    return reduceValue;
}
 
function isEven(number){
    return number % 2 === 0
}
 
function double(number){
    return number * 2;
}
 
function sum(accumulator, current){
    return accumulator + current;
}

const numbers = [1,2,3,4,5,6,7,8,9,10]

const result = processNumber(numbers, isEven, double, sum)
console.log(result)