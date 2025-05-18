function removeDuplicate(arr) {
    return arr.reduce((u,i)=>u.includes(i)? u: [...u,i],[])
}
const removeDuplicateNumber = removeDuplicate([3, 2, 4, 3, 4, 6,])
console.log(removeDuplicateNumber)