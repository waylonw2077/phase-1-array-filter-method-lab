function findMatching(drivers, str) {
    const lowerCaseStr = str.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowerCaseStr));
  }
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  