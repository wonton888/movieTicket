describe('Ticket', function() {
    it("returns the name of movie1 from Ticket object", function() {

        var movie1 = {name:'Mad Max', baseprice: '9', show_times: ['2:00','4:00','7:45','9:45']};
        var movie2 = {name:"Furry Road", baseprice: "12",  show_times: ['3:00','5:00','8:45','10:30']};

        var testTicket = new Ticket(movie1);

        expect(testTicket.movie.name).to.equal("Mad Max");
    });

    it("returns correct show time", function() {

        var movie1 = {name:'Mad Max', baseprice: '9', show_times: ['2:00','4:00','7:45','9:45']};
        var movie2 = {name:"Furry Road", baseprice: "12",  show_times: ['3:00','5:00','8:45','10:30']};

        var testTicket = new Ticket(movie1);

        expect(testTicket.movie.show_times[1]).to.equal("4:00");
    });
    //baseprice prototype
    it("returns senior discount", function() {

        var movie1 = {name:'Mad Max', baseprice: '9', show_times: ['2:00','4:00','7:45','9:45']};
        var movie2 = {name:"Furry Road", baseprice: "12",  show_times: ['3:00','5:00','8:45','10:30']};

        var testTicket = new Ticket(movie1,movie1.baseprice, true);

        testTicket.seniorDiscount();

        expect(testTicket.ticketprice).to.equal(4.5);
    });


  });
