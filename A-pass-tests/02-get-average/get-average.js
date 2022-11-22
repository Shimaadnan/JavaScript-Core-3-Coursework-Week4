// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let ave=0;
    let newarray=[]
    for(let item of numbers){
        if(typeof item==='number'){
            newarray.push(item)
            ave+=item
            
        }
    }
    return ave/newarray.length
}

module.exports = average;
