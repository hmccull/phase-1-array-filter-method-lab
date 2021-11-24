const findMatching = (driverArray, driver) => {
    return driverArray.filter(human => {
      return human.toLowerCase() === driver.toLowerCase()
    })
  }

const fuzzyMatch = (driverArray, beginsWith) => {
    return driverArray.filter(driver => {
        return driver.startsWith(beginsWith)
    })
}

const matchName = (driverArray, driver) => {
    return driverArray.filter(driverObj => {
        return driverObj.name === driver;
    })
}