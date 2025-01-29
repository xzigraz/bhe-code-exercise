# BHE Software Engineer Coding Exercise

I have completed the exercise in javascript.

## Questions
* Is sieve of eratosthenes the right way to solve this problem?

  * I didn't know what sieve of eratosthenes was and looked it up. It seems like I have to layout all the numbers up to a limit, then iterate over every other number and cross out the non-prime numbers. Since the input is just the nth number, then we can assume we need all the numbers if we want to use sieve of eratosthenes. That means every look up, before we even start the calculation, we'll need to take up the space to hold these numbers. In the question README.md, it is encouraged to deviate away from this method and that is what I did here.

## Implementation
* First, I handled a few default use cases as well as edge cases such as n is null, undefined, negative number, number with decimals, and string.

* Second, I handled when n is 0 by return 2 since that is the smallest prime number, there's no need for additional calculation happen for me to know that.

* Third, I added a method to check whether a number is a prime number. Leveraging Math.sqrt to reduce the amount of calculations I need to check, because one of the factor must be equal to or less than the square root of that number. Then I use remainder operator, if the remainder is 0, then it is not a prime number.

* Forth, in the NthPrime method, I set an empty primeNumbers array to hold all the prime numbers I found by calling isPrimeNumber to check against the number input. I also set a starting number since I know the smallest prime number is 2, there's no need to test against anything less than that. Then in the while loop, I am checking the size of the primeNumbers and the n, if the size is smaller than n, then let the loop continue and at the end of each iteration, I increase the startingNum by 1 so I have a new number to test against.

* Finally, I have my primeNumbers array when the loop stops, I just need to return the last number in the array to get the prime number.

## Tests
I replicated the tests but wrote it differently. Leveraging test.each to make the code more readable and maintainable.

I also added edge test cases as well as tests for each of the methods I added.

For the fun challenge, It took about 112 minutes to complete the calculation, so I am commenting it out in the tests.
