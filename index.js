const server = require("./api/server");

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log("Sanity Check Success, port 5000");
});
