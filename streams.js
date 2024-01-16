const fs = require("fs");
const server = require("http").createServer();
server.on("request", (req, res) => {
  //solution 1
  fs.readFile("test-file.txt", (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });

  // Solution 2: streams
  const readablefile = fs.createReadStream("test-file.txt");
  readablefile.on("data", (chunk) => {
    res.write(chunk);
  });

  readablefile.on("end", () => {
    res.end();
  });
  readablefile.on("error", (err) => {
    console.log(err);
    res.statusCode = 500;
    res.end("File not found");
  });

  // Solution 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pipe(writeableDest)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening.....");
});

