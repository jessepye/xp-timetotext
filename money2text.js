'use strict'

function money2text (money) {
  let moneyString = "";



  let placeValue = money.length;

  let readDigit = (digit) => {
    let result = "";
    if (digit === "1") {
      result += "one";
    } else if (digit === "2") {
      result += "two";
    }else if (digit === "3") {
      result += "three";
    }else if (digit === "4") {
      result += "four";
    }else if (digit === "5") {
      result += "five";
    }else if (digit === "6") {
      result += "six";
    }else if (digit === "7") {
      result += "seven";
    }else if (digit === "8") {
      result += "eight";
    }else if (digit === "9") {
      result += "nine";
    }
    return result;
  }

  let readThree = (digits) => {
    let result = "";
    if (digits.length === 1) {
      digits = "00" + digits;
    } else if (digits.length === 2) {
      digits = "0" + digits;
    }

    if (digits.length !== 3) {
      console.log("incorrect length passed to readThree -> ", digits.length)
      return
    }

    if (digits[0] !== "0") {
      result += readDigit(digits[0]);
      result += " hundred";
    }

    if (result.length > 0 && (digits[1] !== "0" || digits[2] !== "0") ){
      result += " and ";
    }

    // 10 - 19
    if (digits.substring(1,3) === "10") {
      result +=  "ten"
    } else if (digits.substring(1,3) === "11") {
      result +=  "eleven"
    }else if (digits.substring(1,3) === "12") {
      result +=  "twelve"
    }else if (digits.substring(1,3) === "13") {
      result +=  "thirteen"
    }else if (digits.substring(1,3) === "14") {
      result +=  "fourteen"
    }else if (digits.substring(1,3) === "15") {
      result +=  "fifteen"
    }else if (digits.substring(1,3) === "16") {
      result +=  "sixteen"
    }else if (digits.substring(1,3) === "17") {
      result +=  "seventeen"
    }else if (digits.substring(1,3) === "18") {
      result +=  "eighteen"
    }else if (digits.substring(1,3) === "19") {
      result +=  "nineteen"
    }

    if (digits[1] === "2") {
      result += "twenty"
    } else if (digits[1] === "3") {
      result += "thirty"
    } else if (digits[1] === "4") {
      result += "fourty"
    } else if (digits[1] === "5") {
      result += "fifty"
    } else if (digits[1] === "6") {
      result += "sixty"
    } else if (digits[1] === "7") {
      result += "seventy"
    } else if (digits[1] === "8") {
      result += "eighty"
    } else if (digits[1] === "9") {
      result += "ninety"
    }

    if (digits[1] !== "0" && digits[1] !== "1" && digits[2] !=="0") {
      result += " ";
    }

    if (digits[2] !== "0" && digits[1] !== "1") {
      result += readDigit(digits[2]);
    }

    return result;
  }

  let cents = money.substring(money.length - 2);
  let wholeDollars = money.substring(0, money.length - 3);
  placeValue -= 3;
  if (placeValue >= 0 && placeValue < 4) {
    moneyString += readThree(wholeDollars);
  } else if (placeValue >= 4 && placeValue < 7) {
    moneyString += readThree(wholeDollars.substring(0, wholeDollars.length - 3)) + " thousand";
    let finalThree = readThree(wholeDollars.substring(wholeDollars.length - 3));
    if (finalThree) {
      moneyString += " " + finalThree;
    }
  } else if (placeValue >= 7 && placeValue < 10) {
    moneyString += readThree(wholeDollars.substring(0, wholeDollars.length - 6)) + " million";
    let thousands = wholeDollars.substring(wholeDollars.length - 6, wholeDollars.length - 3);
    if (thousands !== "000") {
      moneyString += " " + readThree(thousands) + " thousand";
    }
    let finalThree = readThree(wholeDollars.substring(wholeDollars.length - 3));
    if (finalThree) {
      moneyString += " " + finalThree;
    }
  }

  moneyString += " dollars";
  if(cents != "00") {
    moneyString += " and " +readThree(cents) + " cents";
  }
  return moneyString;
}

  // 1234567.00
  // number of digits:
    // 1,2,3 - hundreds
    // 4,5,6 - thousands
    // 7,8,9 - millions

  // 1400
  // readThree(1) + thousand + readThree(400)

  // 23456789
  // readThree(123) + million + readThree(456) + thousand + readThree(789)

// {"amount":"745.00","text":"seven hundred and fourty five dollars"},
//  {"amount":"645.00","text":"six hundred and fourty five dollars"}, **
//  {"amount":"255.00","text":"two hundred and fifty five dollars"}, **
//  {"amount":"55.55","text":"fifty five dollars and fifty five cents"},
//  {"amount":"7000.55","text":"seven thousand dollars and fifty five cents"}

// console.log(money2text("1234567.00"));
// console.log(money2text("12345678.00"));
console.log(money2text("7000.55"));

module.exports = money2text
