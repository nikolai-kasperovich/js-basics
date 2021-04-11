//1
const week = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
}
console.log(week[7]);

//2
let objToArr = (obj) => {
    let arr = [];
    for (let key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            arr.push([key,obj[key]]);            
        }
    }

    return arr;
}
console.log(objToArr(week));

//3
let isPlainObject = (obj) => {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}
console.log(isPlainObject(null));

//4
let deleteProperty = (obj, prop) => {
    let newObj = {...obj};
    delete(newObj[prop]);

    return newObj;
}
let objWithoutProp = deleteProperty(week, 1);
console.log(objWithoutProp);
console.log(week);

//5
let compareObjValues = (obj1, obj2) => {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for(let key of keys1){           
        if(obj1[key] !== obj2[key]){
            return false;
        }      
    }

    return true;
}

let compObj1 = {
    name: 'Ben',
    age: '26',
    job: 'driver',
}

let compObj2 = {
    name: 'Ben',
    age: '26',
    job: 'driver',
}

let compObj3 = {
    name: 'John',
    age: '26',
    job: 'driver',
}

console.log(compareObjValues(compObj1,compObj2));
console.log(compareObjValues(compObj1,compObj3));

//6
var a = { 
    x: 123, 
    y: 321123, 
    z: 3123,
}
var b = { 
    x: 0, 
    y: 1, 
    z: 3123,
}

let intersectObj = (obj1, obj2) => {
    let interArrKeys = Object.keys(obj1).filter(k => obj1[k] === obj2[k]);

    if (interArrKeys.length) {
        let returnObj = {};
        for (key of interArrKeys) {
            returnObj[key] = obj1[key];
        }
        
        return returnObj;
    }

    return false;
}

console.log(intersectObj(a,b))