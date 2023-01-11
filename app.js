//assignment 3

const express = require("express");
const mainRoutes = require("./routes/index");
const app = express();
const port = 3000;

app.use(mainRoutes);

app.listen(port, () => {
  console.log(`Assignment 3 listening on port ${port}`);
});

//assignment 2

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/users", (req, res) => {
//   console.log("/users middleware");
//   res.send("<p>assignment /users<p>");
// });

// app.get("/", (req, res) => {
//   console.log("/ middleware");
//   res.send("<p>assignment /<p>");
// });

// app.listen(port, () => {
//   console.log(`Assignment 2 running on port ${port}`);
// });

//assignment 1

// const http = require("http");
// const fs = require("fs");
// // const routes = require("./routes");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === "/") {
//     res.setHeader("Content-Type", "text-html");
//     res.write("<html>");
//     res.write("<head><title>Assignment 1</title></head>");
//     res.write(
//       '<body><h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></h1></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }
//   if (url === "/users") {
//     res.setHeader("Content-Type", "text-html");
//     res.write("<html>");
//     res.write("<head><title>Assignment 1</title></head>");
//     res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
//     res.write("</html>");
//     return res.end();
//   }
//   if (url === "/create-user") {
//     const body = [];
//     req.on("data", (chunk) => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split("=")[1];
//       fs.writeFileSync("message.txt", message, (err) => {
//         res.statusCode = 302;
//         res.setHeader("Location", "/");
//         return res.end();
//       });
//     });
//   }
// });
// // const server = http.createServer(routes);

// server.listen(3000);
