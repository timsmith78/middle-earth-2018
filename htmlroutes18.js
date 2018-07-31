var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../middle-earth-2018/home.html"));
  });
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "../middle-earth-2018/reservation.html"));
  });
 
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../middle-earth-2018/tables.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../middle-earth-2018/home.html"));
  });
};
