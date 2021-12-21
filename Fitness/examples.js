let bluebox = document.querySelector("#bluebox");
let bluebox2 = document.querySelector("#bluebox2");
let greybox = document.querySelector("#greybox");
let greybox2 = document.querySelector("#greybox2");
let bluebox3 = document.querySelector("#bluebox3");
let greybox3 = document.querySelector("#greybox3");

bluebox2.style.display = "none";
greybox2.style.display = "none";
bluebox3.style.display = "none";
greybox3.style.display = "none";

function button1() { //click the botton to hide bluebox and show bluebox2
    bluebox.style.display = "none";
    bluebox2.style.display = "inline";
}

function button2() { //click the botton to hide greybox and show greybox2
    greybox.style.display = "none";
    greybox2.style.display = "inline";
}

function submit() { //click the botton to hide bluebox2 and show bluebox3
    if(document.getElementById("time-distance").value == "") {
      alert("Error: Please make sure all fields are filled in correctly.");
    }
    else if(document.getElementById("time-distance").value == "0") {
      alert("Error: Please make sure all fields are filled in correctly.");
    }
    else {
      bluebox2.style.display = "none";
      bluebox3.style.display = "inline";

      // Post Request to Server
      let date = document.getElementById("date-id").value;
      let activity = document.getElementById("select-id").value;
      let scalar = document.getElementById("time-distance").value;
      let units = document.getElementById("units").value;
      const data = {date, activity, scalar, units};

      fetch('/submissions', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data) })
          .then(function(response) {
            return response.text();
          })
          .then(function(data) {
            console.log("Data received:", data);
          })
          .catch(function(error) {
          console.error('There has been a problem with your fetch operation:', error);
          displayOutput(null,error);
      });      

      // Reset date
      document.getElementById("date-id").value = today;
      //Reset activity
      document.getElementById("select-id").selectedIndex = "0";
      //Reset time/distance
      document.getElementById("time-distance").value = "";
    }
}

function submit2() { //click the botton to hide greybox2 and show greybox3
    greybox2.style.display = "none";
    greybox3.style.display = "inline";

    // Post Request to Server
    let date = document.getElementById("date-id2").value;
    let activity = document.getElementById("select-id2").value;
    const data = {date, activity};

    fetch('/submissions', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data) })
        .then(function(response) {
          return response.text();
        })
        .then(function(data) {
          console.log("Data received:", data);
        })
        .catch(function(error) {
        console.error('There has been a problem with your fetch operation:', error);
        displayOutput(null,error);
    }); 

    // Reset date
    document.getElementById("date-id2").value = today;
    //Reset activity
    document.getElementById("select-id2").selectedIndex = "0";
}

function button3() { //click the botton to hide bluebox3 and show bluebox2
    bluebox3.style.display = "none";
    bluebox2.style.display = "inline";
}

// Set max date as today
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
if (day < 10) { //When the day is one digit add a 0 in front
    day = '0' + day;
}
if (month < 10) { //When the month is one digit add a 0 in front
    month = '0' + month
}
today = year + '-' + month + '-' + day;
document.getElementById("date-id").setAttribute("max", today);

// Set min date as today
document.getElementById("date-id2").setAttribute("min", today);

// Set default date to today's date
document.getElementById("date-id").value = today;
document.getElementById("date-id2").value = today;

// Set constant unit to the respective activity (default)
if (document.getElementById("select-id").selectedIndex == "0") {
    document.getElementById("units").value = "kilometers";
}

//Past Activity - bold text (style)
const mediaQuery = window.matchMedia('(max-width: 480px)');
// If and else was only a test, but kept for reference
if(mediaQuery.matches) { // Small screen
  document.getElementById("bold").style.fontWeight = "bold";
  document.getElementById("bold").style.fontFamily = "sans-serif";
  document.getElementById("bold").style.marginLeft = "5px";
  document.getElementById("bold").style.marginRight = "5px";
}
else { // Big screen
  document.getElementById("bold").style.fontWeight = "bold";
  document.getElementById("bold").style.fontFamily = "sans-serif";
  document.getElementById("bold").style.marginLeft = "5px";
  document.getElementById("bold").style.marginRight = "5px";
}

let timedistance;
let activity;
let unit;

function change() {
    // Set constant unit to the respective activity (changing)
    if (document.getElementById("select-id").selectedIndex == "0") {
        document.getElementById("units").value = "kilometers";
    }
    if (document.getElementById("select-id").selectedIndex == "1") {
        document.getElementById("units").value = "kilometers";
    }
    if (document.getElementById("select-id").selectedIndex == "2") {
        document.getElementById("units").value = "laps";
    }
    if (document.getElementById("select-id").selectedIndex == "3") {
        document.getElementById("units").value = "kilometers";
    }
    if (document.getElementById("select-id").selectedIndex == "4") {
        document.getElementById("units").value = "minutes";
    }
    if (document.getElementById("select-id").selectedIndex == "5") {
        document.getElementById("units").value = "minutes";
    }
    if (document.getElementById("select-id").selectedIndex == "6") {
        document.getElementById("units").value = "minutes";
    }

    //Past Activity - bold text (changing)
    let timedistance;
    let activity;
    let unit;

    timedistance = document.getElementById("time-distance").value;
    if (document.getElementById("select-id").value == "Walk") {
        activity = "Walk for "
        unit = " Kilometers. "
    }
    if (document.getElementById("select-id").value == "Run") {
        activity = "Run for ";
        unit = " Kilometers. "
    }
    if (document.getElementById("select-id").value == "Swim") {
        activity = "Swim for ";
        unit = " Laps. "
    }
    if (document.getElementById("select-id").value == "Bike") {
        activity = "Bike for ";
        unit = " Minutes. "
    }
    if (document.getElementById("select-id").value == "Yoga") {
        activity = "Yoga for ";
        unit = " Minutes. "
    }
    if (document.getElementById("select-id").value == "Soccer") {
        activity = "Soccer for ";
        unit = " Minutes. "
    }
    if (document.getElementById("select-id").value == "Basketball") {
        activity = "Basketball for ";
        unit = " Minutes. "
    }
    document.getElementById("bold").textContent = activity + timedistance + unit;
}

// Future Plans - bold text
// If and else was only a test, but kept for reference
if(mediaQuery.matches) { // Small screen
  document.getElementById("bold2").style.fontWeight = "bold";
  document.getElementById("bold2").style.fontFamily = "sans-serif";
  document.getElementById("bold2").style.marginLeft = "5px";
}
else { // Big screen
  document.getElementById("bold2").style.fontWeight = "bold";
  document.getElementById("bold2").style.fontFamily = "sans-serif";
  document.getElementById("bold2").style.marginLeft = "5px";
}

let activity2;
if(document.getElementById("select-id2").clicked == false) {
  activity2 = "Walk on";
  let date = document.getElementById("date-id2").value;
  let monthchar1 = date.charAt(5);
  let monthchar2 = date.charAt(6);
  let daychar1 = date.charAt(8);
  let daychar2 = date.charAt(9);
  let yearchar1 = date.charAt(0);
  let yearchar2 = date.charAt(1);
  let yearchar3 = date.charAt(2);
  let yearchar4 = date.charAt(3);
  let finaldate = monthchar1 + monthchar2 +
      "/" + daychar1 + daychar2 + "/" + yearchar1 + yearchar2 + yearchar3 + yearchar4; //Default value before change
  document.getElementById("bold2").textContent = activity2 + " " + finaldate + "!";
}
if (document.getElementById("select-id2").value == "Walk") { //Default value before change
    activity2 = "Walk on";
}
let date = document.getElementById("date-id2").value;
let monthchar1 = date.charAt(5);
let monthchar2 = date.charAt(6);
let daychar1 = date.charAt(8);
let daychar2 = date.charAt(9);
let yearchar1 = date.charAt(0);
let yearchar2 = date.charAt(1);
let yearchar3 = date.charAt(2);
let yearchar4 = date.charAt(3);
let finaldate = monthchar1 + monthchar2 +
    "/" + daychar1 + daychar2 + "/" + yearchar1 + yearchar2 + yearchar3 + yearchar4; //Default value before change
document.getElementById("bold2").textContent = activity2 + " " + finaldate + "!";

function button4() { //click the botton to hide greybox3 and show greybox2
    greybox3.style.display = "none";
    greybox2.style.display = "inline";
    let activity2 = "Walk on";
    let date = document.getElementById("date-id2").value;
    let monthchar1 = date.charAt(5);
    let monthchar2 = date.charAt(6);
    let daychar1 = date.charAt(8);
    let daychar2 = date.charAt(9);
    let yearchar1 = date.charAt(0);
    let yearchar2 = date.charAt(1);
    let yearchar3 = date.charAt(2);
    let yearchar4 = date.charAt(3);
    let finaldate = monthchar1 + monthchar2 +
        "/" + daychar1 + daychar2 + "/" + yearchar1 + yearchar2 + yearchar3 + yearchar4; //Default value before change
    document.getElementById("bold2").textContent = activity2 + " " + finaldate + "!";
}

function change2() {
    let activity2;
    if (document.getElementById("select-id2").value == "Walk") {
        activity2 = "Walk on";
    }
    if (document.getElementById("select-id2").value == "Run") {
        activity2 = "Run on";
    }
    if (document.getElementById("select-id2").value == "Swim") {
        activity2 = "Swim on";
    }
    if (document.getElementById("select-id2").value == "Bike") {
        activity2 = "Bike on";
    }
    if (document.getElementById("select-id2").value == "Yoga") {
        activity2 = "Yoga on";
    }
    if (document.getElementById("select-id2").value == "Soccer") {
        activity2 = "Soccer on";
    }
    if (document.getElementById("select-id2").value == "Basketball") {
        activity2 = "Basketball on";
    }
    let date = document.getElementById("date-id2").value;
    let monthchar1 = date.charAt(5);
    let monthchar2 = date.charAt(6);
    let daychar1 = date.charAt(8);
    let daychar2 = date.charAt(9);
    let yearchar1 = date.charAt(0);
    let yearchar2 = date.charAt(1);
    let yearchar3 = date.charAt(2);
    let yearchar4 = date.charAt(3);
    let finaldate = monthchar1 + monthchar2 +
        "/" + daychar1 + daychar2 + "/" + yearchar1 + yearchar2 + yearchar3 + yearchar4;
    document.getElementById("bold2").textContent = activity2 + " " + finaldate + "!";
}