function fn() {

      /**
   * Generates a random integer between a minimum and a maximum value (inclusive).
   *
   * @param {number} min - Minimum allowed value
   * @param {number} max - Maximum allowed value
   * @returns {number} Random integer between min and max
   */

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  /**
   * Generates a random integer between a minimum and a maximum value (inclusive).
   *
   * @param {number} min - Minimum allowed value
   * @param {number} max - Maximum allowed value
   * @returns {number} Random integer between min and max
   */

function randomString(length) {

  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var result = '';

  for (var i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return result;
}

/**
   * Generates a random human-readable name.
   * - Length is randomized between 5 and 8 characters
   * - First letter is capitalized
   *
   * @returns {string} Random capitalized name
   */

function randomName() {

  var name = randomString(randomInt(5, 8));
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
   * Generates a random hexadecimal color code.
   * Example output: #A1B2C3
   *
   * @returns {string} Random HEX color
   */

function randomColor() {

  var hex = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += hex.charAt(Math.floor(Math.random() * hex.length));
  }

  return color;
}

/**
   * Builds a complete unicorn object to be used as a request body.
   * This function centralizes fake data generation for POST/PUT requests.
   *
   * @returns {Object} Unicorn request payload
   */
function unicorn() {
  return {

    name: randomName() + ' ' + randomName(),   
    age: randomInt(1, 10),
    colour: randomColor()
  };
}

/**
   * Exposes public functions to Karate.
   * Only the unicorn() function is exported,
   * keeping internal helpers encapsulated.
   */
    return {
      unicorn: unicorn
    };
}
