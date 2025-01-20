function promiseEg(flag) {
    return new Promise(function(resolve, reject) { 
        if (flag === 1) {
            resolve("This is a resolved promise");
        } else if (flag === 2) {
            reject("This is a rejected promise");
        } else {
            reject("Invalid flag value");
        }
    });
}

promiseEg(1).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

console.log(promiseEg(1));

// Promise to find location

locationFinder = (location, time) => {
    return new Promise((locFound, locNotFound) => {
        if (isLocationValid(location, time)) {
            locFound(location, "Found in", time, "secs");
        } else {
            locNotFound(location, "Not Found in", time, "secs");
        }
    });
};

function isLocationValid(loc, time) {
    location = "Melbourne";
    t = 2000;
    if (loc === "Melbourne" && time <= t) {
        return true;
    } else {
        return false;
    }
}

locationFinder("Melboune", 2000).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});


// Instagram Example

async function createPost() {
    var post = new Promise((cPost) => {
       setTimeout(() => {
            cPost("Post created successfully")
       },5000)
    })
    console.log(await post);
}
createPost()