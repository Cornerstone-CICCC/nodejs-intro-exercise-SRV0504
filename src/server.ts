import * as http from "http";

const server = http.createServer((req, res) => {
  const url = req.url;

  res.setHeader("Content-Type", "text/html");

  switch (url) {
    case "/":
      res.statusCode = 200;
      res.end("<h1>Home</h1>");
      break;

    case "/about":
      res.statusCode = 200;
      res.end("<h1>About</h1>");
      break;

    case "/my-account":
      res.statusCode = 403;
      res.setHeader("Content-Type", "text/plain");
      res.end("You have no access to this page");
      break;

    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Page not found");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
