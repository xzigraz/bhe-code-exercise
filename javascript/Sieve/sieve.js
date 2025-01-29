class Sieve {
  /**
   * Test a num to see if it's a prime number or not.
   * @param {*} num 
   * @returns Number[]
   */
  isPrimeNumber(num) {
    // use the square root to reduce the amount of numbers that we need to test against
    // because we know one of the factors must be equal to or less than the square root
    // of that number.
    for (let i = 2, numSqrt = Math.sqrt(num); i <= numSqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    // since the smallest prime number is 2, we need to make sure num
    return num > 1;
  }

  /**
   * Throw an error if n is null or undefined.
   * @param {*} n 
   */
  handleAbsenceOfNValue(n) {
    if (n === undefined || n === null) {
      throw new Error("n cannot be null or undefined.");
    }
  }

  /**
   * Throw an error if n is a negative number.
   * @param {*} n 
   */
  handleNegativeNumber(n) {
    if (n < 0) {
      throw new Error("n should be a number greater or equal to 0.");
    }
  }

  /**
   * Throw an error if n is not a number.
   * @param {*} n 
   */
  handleNaN(n) {
    if (typeof n === "string") {
      throw new Error("n should be a number.");
    }
  }

  /**
   * Throw an error if n is not a whole number.
   * @param {*} n 
   */
  handleNoneWholeNumber(n) {
    if (n % 1 !== 0) {
      throw new Error("n should be a whole number.");
    }
  }

  /**
   * Get the nth prime number.
   * @param {*} n 
   * @returns Number
   */
  NthPrime(n) {
    this.handleAbsenceOfNValue(n);
    this.handleNegativeNumber(n);
    this.handleNaN(n);
    this.handleNoneWholeNumber(n);

    // return the first prime number if the nth is 0.
    if (n === 0) {
      return 2;
    }

    let primeNumbers = [];
    let startingNum = 2;

    while (primeNumbers.length - 1 < n) {
      if (this.isPrimeNumber(startingNum)) {
        primeNumbers.push(startingNum);
      }
      startingNum += 1;
    }

    return primeNumbers[n];
  }
}

module.exports = Sieve;
