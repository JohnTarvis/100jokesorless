/** server for groupchat */


const app = require("./app");

const ListeningPort = 6969;

app.listen(process.env.PORT || 6969, function () {
  console.log(`server started on ${ListeningPort}`);
});
