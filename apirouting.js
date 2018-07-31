var path = require("path");
var Reservation  = require("./reservation");

module.exports = function(app) {
 
  app.get("/api/tables", function(req, res) {
    return res.json(reservations);  });


  // If no matching route is found default to home
  app.get("api/waitlist", function(req, res) {
    return res.json(waitlist);
  });

    // If no matching route is found default to home
    app.post("api/reservation", function(req, res) {
        //res.sendFile(path.join(__dirname, "../public/home.html"));
      });
};
