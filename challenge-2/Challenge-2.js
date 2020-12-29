// Challenge 2 
/*Implement the ensure function so that it throws error if called without arguments or the arguments is undifined. Otherwise it should return the given value */

function ensure(value) {
    if(value === undefined) {
        throw new Error ("no arguments");
    }
    return value
}


try {
    console.log(ensure('test'));
}catch(err) {
    console.log(err);
}

