var assert = {
  isTrue: function(assertiontoCheck) {
    if (!assertiontoCheck) {
      throw new Error("Assertion failed:" + assertiontoCheck + " is not truthy");
    }
  }
};

var expect = {
  toEqual: function(actual, expected) {
    if (actual !== expected) {
      throw new Error('Unlucky! ' + actual + ' did not equal ' + expected + '. Try again!');
    } else {
      console.log('Wohoo!! The test passed. You guys are awesome!');
    }
  }
};
