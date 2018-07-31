// Constructor function for creating CastMember objects
var Reservation = function(name,phoneNum,email,uniqueId) {
    
    this.name = name;
    this.phoneNum = phoneNum;
    this.email = email;
    this.uniqueId = uniqueId;
  
    
  };
  
  // Exporting our CastMember constructor. We will require it in movie.js
  module.exports = Reservation;
  