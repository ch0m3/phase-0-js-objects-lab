//Write your code here
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

function logTicketPrice() {
  console.log(attendee.ticketPrice);
}

function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

function updateTicketPrice(attendee, ticketPrice) {
  attendee.ticketPrice = ticketPrice;
}

function removeEventProperty(attendee) {
  delete attendee.event;
} 

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee.name !== 'undefined' && { attendee }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};