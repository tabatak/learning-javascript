function printLeapYearStatus() {
  const year = new Date().getFullYear();
  if (isLeapYear(year)) {
    console.log(`${year}年はうるう年である。`)
  } else {
    console.log(`${year}年はうるう年ではない。`)
  }
}

function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}

printLeapYearStatus();