"use strict"

function showTimeAndDate(){
    const actualTime = new Date();

    const date = actualTime.toLocaleDateString();
    const time = actualTime.toLocaleTimeString();

    console.log("Date:", date)
    console.log("Time:", time)
}

module.exports = {showTimeAndDate};