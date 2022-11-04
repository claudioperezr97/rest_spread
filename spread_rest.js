function filterOutOdds() {
    var nums = [...arguments];
    return nums.filter(num => {
        return num%2 === 0
    });
  }


function findMin(){
    [...arguments].reduce((min, value) => {
        return value < min ? value : min
    })
}

function mergeObject(a, b){
    return {...a, ...b}

}

function doubleAndReturn(arr, ...extra){
    const doubled = extra.map((value) => {return value * 2})
    return [...arr, ...doubled]

}


/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const idx = Math.floor(Math.random() * items.length)
    return [...items.slice(0, idx), ...items.slice(idx + 1)]
}



function extend(array1, array2) {
    return [...array1, ...array2]
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key]:val}
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const updated = {[key]:undefined, ...remainder}//object enhancement
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2}
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]:val}
}

