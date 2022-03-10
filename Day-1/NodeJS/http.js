let http = require("http");

http
    .createServer((req, res) => {
        res.write('Hello World!');
        res.end();
  })
  .listen(3000, () => {
    console.log("Server started on port 3000");
  });
