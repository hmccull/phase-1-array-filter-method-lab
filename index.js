function findMatching(arrayOfDrivers, name) {
    let newArray = [];

    for (const driver of arrayOfDrivers) {
        if (driver.toLowerCase() === name.toLowerCase()) {
            newArray.push(driver);
        }
    }

    return newArray;
}

function fuzzyMatch(arrayOfDrivers, beginsWith) {
    let newArray = [];

    for (const driver of arrayOfDrivers) {
        if (driver.startsWith(beginsWith)) {
            newArray.push(driver);
        }
    }

    return newArray;
}

function matchName(driverObjects, name) {
    let newArray = [];

    for (const driver of driverObjects) {
        if (driver.name === name) {
            newArray.push(driver);
        }
    }
    return newArray;
}