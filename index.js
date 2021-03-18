// Code your solution here
function findMatching(arr, str){
    const res = arr.filter(name => name.toLowerCase() == str.toLowerCase())
    return res
}
function fuzzyMatch(arr, str){
    const filtah = arr.filter(name => name.toLowerCase().indexOf(str.toLowerCase()) == 0)
    return filtah
}
function matchName(arr, str){
    const filtaa = arr.filter(driver => driver["name"].toLowerCase() == str.toLowerCase())
    return filtaa
}