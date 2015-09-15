function Ticket(movieobject,ticketprice,senior){
  this.movie = movieobject
  this.ticketprice = ticketprice
  this.senior = senior

}

// Ticket.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }

Ticket.prototype.seniorDiscount = function(){

    if (this.senior === true){this.ticketprice = this.ticketprice/2 }

    return this.ticketprice

}

$(document).ready(function() {


});//ends document ready function
