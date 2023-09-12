const Sieve = require("./sieve");

describe("Sieve", () => {
  test("valid results", () => {
    const sieve = new Sieve();
    expect(sieve.NthPrime(0)).toBe(2);
    expect(sieve.NthPrime(19)).toBe(71);
    expect(sieve.NthPrime(99)).toBe(541);
    expect(sieve.NthPrime(500)).toBe(3581);
    expect(sieve.NthPrime(986)).toBe(7793);
    expect(sieve.NthPrime(2000)).toBe(17393);
    expect(sieve.NthPrime(1000000)).toBe(15485867);
  });
});
