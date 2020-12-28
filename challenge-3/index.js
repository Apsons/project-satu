// Challenge 3
/* Implement the getInParallel* Function that should be used to invoke multiple API calls in parallel. The function accepts an array of function that return a Promise. The function should return a Promise that should resolve to an arrayof result from the apiCalls argument. */

function getInParallel(apiCalls) {
    //Write your code here
}

let promise = getInParallel([() => Promise.resolve("First API call!"), () => Promise.resolve("Second API call!")]);
if(promise) {
    promise.then((result) => console.log(result)).catch((err) => console.log(err));
}
module.export.getInParallel = getInParallel;