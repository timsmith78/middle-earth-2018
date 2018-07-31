var path = require("path");
var Reservation = require("./reservation");

module.exports = function (app) {
    var waitlist = [];
    var reservations = [];
    console.log("Inside apirouting");
    app.get("/api/tables", function (req, res) {
        return res.json(reservations);
    });


    // If no matching route is found default to home
    app.get("/api/waitlist", function (req, res) {
        return res.json(waitlist);
    });
    
  
    app.post("/api/reservation", function (req, res) {
        console.log(req.body);
        if(reservations.length<5){
            var newReservation = new Reservation(req.body.name, req.body.phoneNumber, req.body.email, req.body.uniqueId);
       
            console.log("-");
    
           // console.log(newReservation);
    
            reservations.push(newReservation);
    
            res.json(true);
        }
        else{
            var newReservation = new Reservation(req.body.name, req.body.phoneNumber, req.body.email, req.body.uniqueId);
       
            console.log("-");
    
            console.log(newReservation);
    
            waitlist.push(newReservation);
            res.json(false);
        }

        //res.message();
    });
};
