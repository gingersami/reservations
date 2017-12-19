var reservations = {
  "Bob": { claimed: false },
  "Ted": { claimed: true }
}
// var name = prompt('Please enter the name for your reservation');

// function keysToLowerCase(obj) {
//   var keys = Object.keys(obj);
//   var n = keys.length;
//   while (n--) {
//     var key = keys[n]; 
//     if (key !== key.toLowerCase()) { 
//       obj[key.toLowerCase()] = obj[key] 
//       delete obj[key] 
//     }
//   }
//   return (obj);
// }
// keysToLowerCase(reservations);




var claimReservation = function () {
  var name = document.getElementById("b").value;
  name = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()

  if(reservations[name]){
    if(reservations[name].claimed === false){
      alert("Welcome " + name)
    }
    else if (reservations[name].claimed){
      alert("Sorry,reservation already claimed")
    }
} else {
  reservations[name] = {claimed: true}
    alert("Reservation added under the name: " + name)
    document.getElementById("output").innerHTML = name
  }
}
// claimReservation(name);


