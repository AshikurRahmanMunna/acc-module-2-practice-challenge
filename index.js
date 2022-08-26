const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile("./index.html", (error, data) => {
        if (error) {
          res.write("Something Went Wrong");
          res.end();
        } else {
          res.write(data);
          res.end();
        }
      });
      break;
    case "/read":
      fs.readFile("./first.txt", (error, data) => {
        if (error) {
          res.write("Something Went wrong");
          res.end();
        } else {
          res.write(data);
          res.end();
        }
      });
      break;
    case "/write":
      fs.readFile("./first.txt", (error, data) => {
        if (error) {
          res.write("Error on reading");
          res.end();
        } else {
          fs.writeFile("./second.txt", data, (err) => {
            if (error) {
              res.write("Error on writing");
              res.end();
            } else {
              res.write("Data wrote successfully");
              res.end();
            }
          });
        }
      });
      break;
    case "/append":
      fs.appendFile(
        "./first.txt",
        " No! It will be full not pull ! 😑",
        (error, data) => {
          if (error) {
            res.write("Error on appending");
            res.end();
          } else {
            res.write("Data appended Successfully");
            res.end();
          }
        }
      );
      break;
    case "/delete":
      fs.unlink("./second.txt", (error, data) => {
        if (error) {
          res.write("Error on deleting");
          res.end();
        } else {
          res.write("File deleted Successfully");
          res.end();
        }
      });
      break;
    default:
      fs.readFile("./notFound.html", (error, data) => {
        if (error) {
          res.write("Something Went Wrong");
          res.end();
        } else {
          res.write(data);
          res.end();
        }
      });
  }
});

server.listen(5000);
console.log("Server is running");