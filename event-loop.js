const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Imediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Imediate 2 finished"));

  process.nextTick(() => {
    console.log("process.next tick");

    crypto.pbkdf2(
      "Password",
      "salt",
      parseInt("100000", 10),
      1024,
      "sha512",
      () => {
        console.log(Date.now() - start, "Password encrypted");
      }
    );
    crypto.pbkdf2(
      "Password",
      "salt",
      parseInt("100000", 10),
      1024,
      "sha512",
      () => {
        console.log(Date.now() - start, "Password encrypted");
      }
    );
    crypto.pbkdf2(
      "Password",
      "salt",
      parseInt("100000", 10),
      1024,
      "sha512",
      () => {
        console.log(Date.now() - start, "Password encrypted");
      }
    );
    crypto.pbkdf2(
      "Password",
      "salt",
      parseInt("100000", 10),
      1024,
      "sha512",
      () => {
        console.log(Date.now() - start, "Password encrypted");
      }
    );
  });
});

console.log("Hello from the top-level code");
