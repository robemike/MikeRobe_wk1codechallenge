// NOTE: This is linked to speed.html

// Created a function calculateDemeritPoints that will take as input the speed of a 
// given car and retuen as output a particular message based on a particular condition 

function calculateDemeritPoints() {
    let speed = parseFloat(prompt("Enter the speed of the car (in km/h):"));
    // The above line prompts user to enter car speed in km/h.
    // The entered value is stored in the variable speed 
    let demeritPoints = 0;
    // The above variable store the number of demerit points assigned to the driver based on speed.
    if (speed <= 70) {
        alert("Ok");
    } else if (speed > 70 && speed <= 130) {
        demeritPoints = Math.floor((speed - 70) / 5);
        alert("Points: " + demeritPoints);
    } else {
        alert("License suspended");
    }
    // The conditions above will alert the driver based on car speed 
}