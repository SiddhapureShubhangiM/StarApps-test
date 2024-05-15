function minPlanesNeeded(fuel) {
    let planes = 0;
    let currentFuel = fuel[0];

    for (let i = 0; i < fuel.length; i++) {
        // If we run out of fuel before reaching the next airport
        if (currentFuel === 0) {
            return -1;
        }

        currentFuel--;

        // Refuel if necessary
        if (currentFuel < fuel[i]) {
            currentFuel = fuel[i];
            planes++;
        }
    }

    return planes;
}

const fuelArray = [2,1,2,3,1];
console.log(minPlanesNeeded(fuelArray));

// Steps
// step 1: Using simple for loop it iterates through each airport
// and makes optimal choices at each step, 
// ensuring that it hires an additional plane only when necessary to reach the next airport
// step 2: If the current fuel becomes 0 before reaching the 
//next airport, return -1 indicating that the journey is not possible.
// step 3: If the remaining fuel (currentFuel) is less than the fuel required to reach the next airport (fuel[i]),
// refill the fuel tank to the level of fuel[i] and hire an additional plane (planes++)
// step 4:Repeat steps 3 for each airport until reaching the last airport.
// step 5:Return the total number of planes hired (planes) as the minimum number of planes needed to reach the last airport.

