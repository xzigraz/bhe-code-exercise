const Sieve = require("./sieve");

// describe("Sieve", () => {
//   test("valid results", () => {
//     const sieve = new Sieve();
//     expect(sieve.NthPrime(0)).toBe(2);
//     expect(sieve.NthPrime(19)).toBe(71);
//     expect(sieve.NthPrime(99)).toBe(541);
//     expect(sieve.NthPrime(500)).toBe(3581);
//     expect(sieve.NthPrime(986)).toBe(7793);
//     expect(sieve.NthPrime(2000)).toBe(17393);
//     expect(sieve.NthPrime(1000000)).toBe(15485867);
//     expect(sieve.NthPrime(10000000)).toBe(179424691);
//     //expect(sieve.NthPrime(100000000)).toBe(2038074751); not required, just a fun challenge
//   });
// });

// ################# Updated and additional tests #################
describe("Sieve get nth prime number - original tests", () => {
  const sieve = new Sieve();

  test.each([
    {n: 0, expected: 2},
    {n: 19, expected: 71},
    {n: 99, expected: 541},
    {n: 500, expected: 3581},
    {n: 986, expected: 7793},
    {n: 2000, expected: 17393},
    {n: 1000000, expected: 15485867},
    {n: 10000000, expected: 179424691}
  ])("The ($n)th prime number should be ($expected).", ({n, expected}) => {
    expect(sieve.NthPrime(n)).toBe(expected);
  });
});

// describe("Sieve get nth prime number - fun challenge", () => {
//   const sieve = new Sieve();
//   beforeAll(() => {
//     console.log("Start testing 100000000th prime number, it's going to take a while.");
//   });

//   test("The 100000000th prime number should be 2038074751.", () => {
//     expect(sieve.NthPrime(100000000)).toBe(2038074751);
//   });
// });

describe("Sieve get nth prime number - edge cases", () => {
  let sieve = new Sieve();

  test("n is null should throw 'n cannot be null or undefined.'", () => {
    expect(() => {sieve.NthPrime(null)}).toThrow("n cannot be null or undefined.");
  });
  test("n is undefined should throw 'n cannot be null or undefined.'", () => {
    expect(() => {sieve.NthPrime(undefined)}).toThrow("n cannot be null or undefined.");
  });

  test("n is -1 should throw 'n should be a number greater or equal to 0.'", () => {
    expect(() => {sieve.NthPrime(-1)}).toThrow("n should be a number greater or equal to 0.");
  });

  test("n is 'test' should throw 'n should be a number.'", () => {
    expect(() => {sieve.NthPrime("test")}).toThrow("n should be a number.");
  });
  test("n is '' should throw 'n should be a number.'", () => {
    expect(() => {sieve.NthPrime("")}).toThrow("n should be a number.");
  });

  test("n is 1.2 should throw 'n should be a whole number.'", () => {
    expect(() => {sieve.NthPrime(1.2)}).toThrow("n should be a whole number.");
  });
  test("n is Infinity should throw 'n should be a whole number.'", () => {
    expect(() => {sieve.NthPrime(Infinity)}).toThrow("n should be a whole number.");
  });
  test("n is BigInt should throw 'n should be a whole number.'", () => {
    expect(() => {sieve.NthPrime(BigInt)}).toThrow("n should be a whole number.");
  });

  test("should return a number when n is a valid value.", () => {
    expect(typeof sieve.NthPrime(2)).toBe("number");
  });
});

describe("Sieve test - isPrimeNumber", () => {
  const sieve = new Sieve();

  test("should return true for prime numbers", () => {
    const primeNumbers = [2, 3, 5, 7, 11];
    primeNumbers.forEach(num => {
      expect(sieve.isPrimeNumber(num)).toBe(true);
    });
  });

  test("should return true for large prime numbers", () => {
    const primeNumbers = [211, 17393];
    primeNumbers.forEach(num => {
      expect(sieve.isPrimeNumber(num)).toBe(true);
    });
  });

  test("should return false for number 1", () => {
    expect(sieve.isPrimeNumber(1)).toBe(false);
  });

  test("should return false for composite numbers", () => {
    const compositeNumbers = [4, 6, 12, 20, 44];
    compositeNumbers.forEach(num => {
      expect(sieve.isPrimeNumber(num)).toBe(false);
    });
  });

  test("should use square root optimization to handle large amount of non-prime numbers", () => {
    const compositeNumbers = [4, 12, 44, 66, 205, 1001, 7000];
    compositeNumbers.forEach(num => {
      expect(sieve.isPrimeNumber(num)).toBe(false);
    });
  });

  test("should calculate square root once at loop initialization", () => {
    const num = 29;
    const sqrtSpy = jest.spyOn(Math, 'sqrt');
    sieve.isPrimeNumber(num);
    expect(sqrtSpy).toHaveBeenCalledTimes(1);
    sqrtSpy.mockRestore();
  });

  test("should return false if number is negative or 0", () => {
    const numbers = [-1, 0];
    numbers.forEach(num => {
      expect(sieve.isPrimeNumber(num)).toBe(false);
    });
  });

  test("should return boolean for any input number", () => {
    const numbers = [2, 3, 4, 5, 6, 8];
    numbers.forEach(num => {
      expect(typeof sieve.isPrimeNumber(num)).toBe("boolean");
    });
  });
});

describe("Sieve test - handleAbsenceOfNValue", () => {
  const sieve = new Sieve();

  test("n is null should throw 'n cannot be null or undefined.'", () => {
    expect(() => {sieve.handleAbsenceOfNValue(null)}).toThrow("n cannot be null or undefined.");
  });
  test("n is undefined should throw 'n cannot be null or undefined.'", () => {
    expect(() => {sieve.handleAbsenceOfNValue(undefined)}).toThrow("n cannot be null or undefined.");
  });
});

describe("Sieve test - handleNegativeNumber", () => {
  const sieve = new Sieve();

  test("n is -1 should throw 'n should be a number greater or equal to 0.'", () => {
    expect(() => {sieve.handleNegativeNumber(-1)}).toThrow("n should be a number greater or equal to 0.");
  });
});

describe("Sieve test - handleNaN", () => {
  const sieve = new Sieve();

  test("n is 'test' should throw 'n should be a number.'", () => {
    expect(() => {sieve.handleNaN("test")}).toThrow("n should be a number.");
  });
  test("n is '' should throw 'n should be a number.'", () => {
    expect(() => {sieve.handleNaN("")}).toThrow("n should be a number.");
  });
});

describe("Sieve test - handleNoneWholeNumber", () => {
  const sieve = new Sieve();

  test("n is 1.2 should throw 'n should be a whole number.'", () => {
    expect(() => {sieve.handleNoneWholeNumber(1.2)}).toThrow("n should be a whole number.");
  });
  test("n is Infinity should throw 'n should be a whole number.'", () => {
    expect(() => {sieve.handleNoneWholeNumber(Infinity)}).toThrow("n should be a whole number.");
  });
  test("n is BigInt should throw 'n should be a whole number.'", () => {
    expect(() => {sieve.handleNoneWholeNumber(BigInt)}).toThrow("n should be a whole number.");
  });
});