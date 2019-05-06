var request = require("request");
var fs = require("fs");
request
  .get("https://sytantris.github.io/http-examples/future.jpg") // Note 1
  .on("error", function(err) {
    // Note 2
    throw err;
  })
  .on("response", function(response) {
    // Note 3
    console.log(
      "Response message: ",
      response.statusMessage + " Response headers: ",
      response.headers["content-type"]
    );
  })
  .pipe(fs.createWriteStream("./future.jpg")); // Note 4
