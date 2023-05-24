export class FizzBuzz {
  play(number: number): String {
    if (number < 1 || number > 100) {
      throw new Error("Invalid number");
    }

    let word: String = "";

    if (number % 3 === 0) {
      word += "Fizz";
    }

    if (number % 5 === 0) {
      word += "Buzz";
    }

    if (numberIsPrime(number)) {
      word += "Whiz";
    }

    if (word) {
      return word;
    }

    return String(number);
  }
}

function numberIsPrime(number: number): boolean {
  // NEEDS TO BE ABOVE 1
  if (number <= 1) {
    return false
  }
  // IT CANNOT BE DIVISIBLE FOR ANY NUMBER OTHER THAN 1 AND ITSELF
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(number, i, number % i);
      
      return false;
    }
  }
  return true;
}
