# BHE Software Engineer Coding Exercise

## The Sieve of Eratosthenes

Prime numbers have many modern day applications and a long history in 
mathematics. Utilizing your own resources research the sieve of Eratosthenes,
an algorithm for generating prime numbers. Based on your research, implement 
an API that allows the caller to retrieve the Nth prime number.
Some stub code and a test suite have been provided as a convenience, however, 
you are encouraged to deviate from Eratosthenes's algorithm, modify the 
existing functions/methods or anything else that might showcase your ability 
provided the following requirements are satisfied.

Stub code has been provided in Go, C#, and Javascript. Please choose from one
of the provided language stubs that is most appropriate based on your own
skill set and the position you are applying for.

### Requirements

- Fork this repo to implement your solution
- The library package provides an API for retrieving the Nth prime number using 0-based indexing where the 0th prime number is 2
- Interviewers must be able to execute a suite of tests
  - Go: `go test ./...`
  - C#: `dotnet test Sieve.Tests`
  - Javascript: `npm run test`
- Your solution is committed to your project's `main` branch, no uncommitted changes or untracked files please
- Submit the link to your public fork for review

### Considerations

You may add more tests or restructure tests, but you may NOT change or remove
the existing test outcomes; eg- f(0)=2, f(19)=71, f(99)=541, ..., f(10000000)=179424691 

During the technical interview, your submission will be discussed, and you will be evaluated in the following areas:

- Technical ability
- Communication skills
- Work habits and complementary skills
