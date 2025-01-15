function delayPromise(delay, message) {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(message);
        }, delay);
    });
}

delayPromise(2000, "Hi, kitty)")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });