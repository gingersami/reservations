var reservations = {
  "Bob": { claimed: false },
  "Ted": { claimed: true }
}
var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
  if(reservations[name]){
    if(reservations[name].claimed === false){
      alert("Welcome " + name)
    }
    else if (reservations[name].claimed){
      alert("Sorry,reservation already claimed")
    }
} else {
  reservations[name] = {claimed: true}
  alert("Your Reservation was claimed")
  }
}
claimReservation(name);


