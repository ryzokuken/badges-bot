function checkRepository(actual, expected) {
  for (const key in expected) {
    if (!actual.hasOwnProperty(key) || actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
}

module.exports = { checkRepository };
