'use strict'

function time2text (time) {

  let timeString = "";
  let hour = time.substring(0, 2);
  let minuteTen = time.substring(3,4);
  let minuteOne = time.substring(4,5);
  let minute = time.substring(3,5);
  let hourInt = parseInt(hour);
  let minuteInt = parseInt(minute);

  function prependMinutes() {
    function increaseHour() {
      hourInt++;
      if (hourInt >= 24) {
        hourInt -= 24;
      }
      hour = hourInt.toString();
      if (hour.length === 1) {
        hour = "0" + hour;
      }
    }
    if (minute === "05") {
      timeString += "five past ";
    } else if (minute === "10") {
      timeString += "ten past ";
    } else if (minute === "15") {
      timeString += "quarter past ";
    } else if (minute === "20") {
      timeString += "twenty past ";
    } else if (minute === "30") {
      timeString += "half past ";
    } else if (minute === "40") {
      timeString += "twenty to ";
      increaseHour();
    } else if (minute === "45") {
      timeString += "quarter to ";
      increaseHour();
    } else if (minute === "50") {
      timeString += "ten to ";
      increaseHour();
    } else if (minute === "55") {
      timeString += "five to ";
      increaseHour();
    } else {
      return false; // no minutes were prepended, returning false
    }
    return true; // minutes WERE prepended
  }

  function appendMinutes() {
    if (minuteTen === "1" ) {
      if (minuteOne === "0") {
        timeString += " ten"
      } else if (minuteOne === "1") {
        timeString += " eleven"
      } else if (minuteOne === "2") {
        timeString += " twelve"
      } else if (minuteOne === "3") {
      timeString += " thirteen"
      } else if (minuteOne === "4") {
        timeString += " fourteen"
      } else if (minuteOne === "5") {
        timeString += " fifteen"
      } else if (minuteOne === "6") {
        timeString += " sixteen"
      } else if (minuteOne === "7") {
        timeString += " seventeen"
      } else if (minuteOne === "8") {
        timeString += " eighteen"
      } else if (minuteOne === "9") {
        timeString += " nineteen"
      }
    } else {
      if (minuteTen === "2") {
        timeString += " twenty";
      } else if (minuteTen === "3") {
        timeString += " thirty"
      }else if (minuteTen === "4") {
        timeString += " fourty"
      }else if (minuteTen === "5") {
        timeString += " fifty"
      } else if (minuteTen === "0" && minuteOne !== "0") {
        timeString += " oh"
      }

      if (minuteTen === "0" && minuteOne === "0") {
        timeString += " o'clock";
      }

      if (!timeString.includes("o'clock")) {
        if (timeString.includes("oh")) {
          timeString += " ";
        } else {
          timeString += "-";
        }
      }

      if (minuteOne === "1") {
        timeString += "one"
      } else if (minuteOne === "2") {
        timeString += "two"
      }else if (minuteOne === "3") {
        timeString += "three"
      }else if (minuteOne === "4") {
        timeString += "four"
      }else if (minuteOne === "5") {
        timeString += "five"
      }else if (minuteOne === "6") {
        timeString += "six"
      }else if (minuteOne === "7") {
        timeString += "seven"
      }else if (minuteOne === "8") {
        timeString += "eight"
      }else if (minuteOne === "9") {
        timeString += "nine"
      }
    }
  }

  if (time === "00:00" || time === "24:00") return "midnight";
  if (time === "12:00") return "noon";

  let minutesWerePrepended = prependMinutes();

  if (hour === "01" || hour === "13") {
    timeString += "one";
  } else if (hour === "02" || hour === "14") {
    timeString += "two"
  } else if (hour === "03" || hour === "15") {
    timeString += "three"
  } else if (hour === "04" || hour === "16") {
    timeString += "four"
  } else if (hour === "05" || hour === "17") {
    timeString += "five"
  } else if (hour === "06" || hour === "18") {
    timeString += "six"
  } else if (hour === "07" || hour === "19") {
    timeString += "seven"
  } else if (hour === "08" || hour === "20") {
    timeString += "eight"
  } else if (hour === "09" || hour === "21") {
    timeString += "nine"
  } else if (hour === "10"|| hour === "22") {
    timeString += "ten"
  } else if (hour === "11" || hour === "23") {
    timeString += "eleven"
  } else if (hour === "12" || hour === "00" ) {
    if (minutesWerePrepended) {
      if (hour === "00") {
        timeString += "midnight";
      } else {
        timeString += "noon";
      }
    } else {
      timeString += "twelve";
    }
  }

  if (!minutesWerePrepended) {
    appendMinutes();
  }

  if(!timeString.includes("midnight") && !timeString.includes("noon")) { // !true || !false
    if (hourInt >= 0 && hourInt < 12){
      if (hourInt !== 0 || (hourInt === 0 && minuteInt !== 0)) {
        timeString += " in the morning"
      }
    } else if (hourInt >= 12 && hourInt <= 17) {
      if (hourInt !== 12 || (hourInt === 12 && minuteInt !== 0)) {
        timeString += " in the afternoon"
      }
    } else {
      timeString += " in the evening"
    }
  }

  return timeString;
}

// console.log(time2text("23:50"));
module.exports = time2text
