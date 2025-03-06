//const returnFirstTwoDrivers = function(){
   //  returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])=returnFirstTwoDrivers.slice(2);
//}
//console.log[returnFirstTwoDrivers];
/*const driversArray = ['Antonia','Nuru','Amari','Mo']
const slicedArray = driversArray.slice(0,2);
console.log(slicedArray);*/
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);

}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(multiplier){
    return function(fare){
        return (fare * multiplier);
    }
}
function createFareMultiplier(multiplier){
    return function(fare){
        return (fare * multiplier);
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers,driverSelector){
    return driverSelector(drivers);
}

    


// Code your solution in this file!
