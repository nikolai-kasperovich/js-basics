//Задание 1
//a)
Array.prototype.map = function(projectionFunction) {
    let returnArr = [];
    for (let i = 0; i < this.length; i++) {
        returnArr.push(projectionFunction(this[i]));
    }

    return returnArr;
}
let arr = [1,2,3];
console.log(arr.map(function(x){return x+1;}))

//б)
var newReleases = [{
	"id": 70111470,
	"title": "Die Hard",
	"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [4.0],
	"bookmark": []
}, {
	"id": 654356453,
	"title": "Bad Boys",
	"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [5.0],
	"bookmark": [{ id: 432534, time: 65876586 }]
}, {
	"id": 65432445,
	"title": "The Chamber",
	"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [4.0],
	"bookmark": []
}, {
	"id": 675465,
	"title": "Fracture",
	"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [5.0],
	"bookmark": [{ id: 432534, time: 65876586 }]
}];

console.log(newReleases.map(function(obj){

    let result = {};
    result.id = obj['id'];
    result.title = obj['title'];

    return result;
}))

//в)
Array.prototype.filter = function(predicateFunction){
    let returnArr = [];
    for (let i = 0; i < this.length; i++) {
        if (predicateFunction(this[i])){
            returnArr.push(this[i]);
        }        
    }

    return returnArr;
}

let arr2 = [1,2,3];
console.log(arr.filter(function(x){return x > 2;}))

//г
let topRatedFilms = newReleases.filter(function(obj){   
    return obj['rating'][0] == 5;
});

let topRatedIDs = [];

topRatedFilms.forEach(element => {
    topRatedIDs.push(element.id);
});
console.log(topRatedIDs);

//д)

var movieLists = [{
	name: "Instant Queue",
	videos : [{
		"id": 70111470,
		"title": "Die Hard",
		"boxarts": [{
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
            }, {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" 
            }],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	}, {
		"id": 654356453,
		"title": "Bad Boys",
		"boxarts": [{
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
            }, {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
            }],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}]
}, {
	name: "New Releases",
	videos: [{
		"id": 65432445,
		"title": "The Chamber",
		"boxarts": [{
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
            }, {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" 
            }],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	}, {
		"id": 675465,
		"title": "Fracture",
		"boxarts": [{
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
            }, {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
            }, {
            width: 300,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
            }],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}]
}];

let firstObj = movieLists[0];
let secondObj = movieLists[1];

let callbackFuncFilter = (obj) => {
    return obj.width == 150;
}

let callbackFuncMap = (obj) => {
    
    let res = {};

    res.id = obj['id'];
    res.title = obj['title'];
    let boxartArr = obj['boxarts'].filter(callbackFuncFilter)
    res.boxart = boxartArr[0]['url'];

    return res;
}

let firstPartArr = firstObj.videos.map(callbackFuncMap);
let secondPartArr = secondObj.videos.map(callbackFuncMap);

let finalResult = firstPartArr.concat(secondPartArr);

console.log(finalResult);

//е)

Array.prototype.reduce = function(combiner, initialValue) {
    let returnValue = 0;
    if (initialValue) {
        returnValue = initialValue;
    }
    for (let i = 0; i < this.length; i++) {
        returnValue = combiner(returnValue,this[i]);       
    }

    return returnValue;
}

console.log([1,2,3].reduce(function(memo, item) { return memo + item; }));
console.log([1,2,3].reduce(function(memo, item) { return memo + item; },10));

//ж)

let ratings = [2,3,1,4,5];

console.log(ratings.reduce(function(memo, item) { return (item > memo) ? item : memo; }));

//з)

var boxarts = [{
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    }, {
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
    }, {
        width: 300,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
    }, {
        width: 425,
        height: 150,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
    }];

let maxSquare = boxarts.reduce(function(memo, item) { 
    return (item.width * item.height > (memo == 0 ? memo : memo.width * memo.height) ) ? item : memo; 
});

console.log(maxSquare.url);

//и)

var videos = [{
	"id": 65432445,
	"title": "The Chamber"
}, {
	"id": 675465,
	"title": "Fracture"
}, {
	"id": 70111470,
	"title": "Die Hard"
}, {
	"id": 654356453,
	"title": "Bad Boys"
}];

console.log(videos.reduce(function(memo, item) { 
    memo[item['id']] = item['title'];
    return memo; 
},{}));
