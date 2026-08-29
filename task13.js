// Predicted output:
// Synchronous message
// Promise message
// setTimeout message

console.log("Synchronous message");

Promise.resolve().then(() => {
    console.log("Promise message");
});

setTimeout(() => {
    console.log("setTimeout message");
}, 0);

// Confirmed: predicted order is correct.
