/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {
    const regex = /[a-zA-Z]/;
    const num = input.split(regex);
    var result;

    if (num[0] !== "") {
      if (num[0].includes("/")) {
          result = num[0].split("/").length !== 2 ? "invalid number" : eval(num[0]);
      } else {
        result = parseFloat(num[0]);
      }
      } else {
        result = 1;
      }

    return result;
  };

  this.getUnit = function(input) {
    const regex = /[a-zA-Z]+$/;
    const unit = input.match(regex);
    var result;
    if (unit && ["gal","l","mi","km","lbs","kg"].includes(unit[0].toLowerCase())) {
      result = unit[0];
    } else {
      result = "invalid unit";
    }
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;

    switch (initUnit.toLowerCase()) {
      case "gal":
        result = "l";
        break;
        case "mi":
        result = "km";
        break;
        case "lbs":
        result = "kg";
        break;
        case "l":
        result = "gal";
        break;
        case "kg":
        result = "lbs";
        break;
        case "km":
        result = "mi";
        break;

    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit.toLowerCase()) {
      case "gal":
        result = "gallons";
        break;
        case "mi":
        result = "miles";
        break;
        case "lbs":
        result = "pounds";
        break;
        case "l":
        result = "liters";
        break;
        case "kg":
        result = "kilograms";
        break;
        case "km":
        result = "kilometers";
        break;
    }

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    switch (initUnit.toLowerCase()) {
      case "gal":
        result = initNum * galToL;
        break;
        case "mi":
        result = initNum * miToKm;
        break;
        case "lbs":
        result = initNum * lbsToKg;
        break;
        case "l":
        result = initNum / galToL;
        break;
        case "km":
        result = initNum / miToKm;
        break;
        case "kg":
        result = initNum / lbsToKg;
        break;
    }

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };

}

module.exports = ConvertHandler;
