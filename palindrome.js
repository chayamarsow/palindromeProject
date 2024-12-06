let input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const results = document.getElementById("result");

function getResults() {
  if (input.value === "") {
    alert("Please input a value")
  } else if (input.value.replace(/\s|[_\W]|^[^a-z\d]*|[^a-z\d]*$/gi, '').toLowerCase() === input.value.replace(/\s|[_\W]|^[^a-z\d]*|[^a-z\d]*$/gi, '').split('').reverse().join('').toLowerCase()) {
    results.innerText = `${input.value} is a palindrome`;
    input.value = "";
  } else {
    results.innerText = `${input.value} is not a palindrome`;
    input.value = "";
  }
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getResults();
  }
})
