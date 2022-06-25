
function sum(total, num) {
    return total + num
}
function calSum(arr) {
    return arr.reduce(sum)
}

console.log(calSum([1,2,3]))

const getNewArray = function(strArr) {
    return strArr.filter(filter)
}

function filter(sth) {
    return sth.length >= 5 && sth.includes(`a`)
}

console.log(getNewArray([`bbbbbb`, `aaa`, `abc`]))