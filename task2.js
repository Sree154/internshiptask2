const output = document.getElementById("output");


function reverseString() {
  const str = prompt("Enter a string to reverse:");
  const reversed = str.split("").reverse().join("");
  output.innerHTML = `Reversed String: <b>${reversed}</b>`;
}


function checkPrime() {
  const num = parseInt(prompt("Enter a number:"));
  if (num < 2) {
    output.innerHTML = `${num} is not a prime number.`;
    return;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      output.innerHTML = `${num} is not a prime number.`;
      return;
    }
  }
  output.innerHTML = `${num} is a prime number!`;
}


function removeDuplicates() {
  const arr = prompt("Enter array elements separated by commas:")
    .split(",")
    .map(item => item.trim());
  const unique = [...new Set(arr)];
  output.innerHTML = `Array without duplicates: [${unique.join(", ")}]`;
}


function countOccurrences() {
  const arr = prompt("Enter array elements separated by commas:")
    .split(",")
    .map(item => item.trim());
  const count = {};
  arr.forEach(item => count[item] = (count[item] || 0) + 1);
  
  let result = "<b>Occurrences:</b><br>";
  for (let key in count) {
    result += `${key}: ${count[key]}<br>`;
  }
  output.innerHTML = result;
}

function checkPalindrome() {
  const str = prompt("Enter a string:");
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const isPalindrome = cleaned === cleaned.split("").reverse().join("");
  output.innerHTML = isPalindrome
    ? `<b>${str}</b> is a palindrome!`
    : `<b>${str}</b> is not a palindrome.`;
}
