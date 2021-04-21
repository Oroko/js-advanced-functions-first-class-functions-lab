// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0,2)
}
const returnLastTwoDrivers = (arr) => {
  return arr.slice(arr.length -2)
}
const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (i) => {
  return function(fare){
    return fare * i
  }
};
const fareDoubler = (fare) => {
  return fare * 2
}
const fareTripler = (fare) => {
  return fare * 3
}
const selectDifferentDrivers = (arr, fn) => {
  return fn(arr)
}

