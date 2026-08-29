// V8 executes JavaScript code, while libuv handles asynchronous
// operations such as timers. Node.js can continue executing other
// code while the timer runs in the background.

setTimeout(() => {
    console.log("Timer finished");
}, 3000);

console.log("Countdown is running...");
