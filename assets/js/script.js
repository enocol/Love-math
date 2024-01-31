document.addEventListener("DOMContentLoaded", function(){ 
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
           if (this.getAttribute("data-type") === "submit") {
                if (document.getElementById("answer-box").value === "") {
                    alert("Please enter your answer");
                    return;
                }
               checkAnswer();

           } else {
               const gameType = this.getAttribute("data-type");
              runGame(gameType);
           }
        });
    }
});

function runGame(gameType) {
  const num1 = Math.floor(Math.random() * 25) + 1;
  const num2 = Math.floor(Math.random() * 25) + 1; 
  
    if (gameType === 'addition') return displayAdditionQuestion(num1, num2);
    if (gameType === "multiplication") return  displayMultiplyQuestion(num1, num2);
    if (gameType === "subtration") return  displaySubtractQuestion(num1, num2);
    if (gameType === "division") return displayDivisionQuestion(num1, num2);
    else {
       alert(`Unknown game type ${gameType}`);
       throw `Unknown game type ${gameType}, aborting!`;
    }
}

function displayAdditionQuestion(num1, num2) {
    document.getElementById("operand1").textContent = num1;
    document.getElementById("operand2").textContent = num2;
    document.getElementById("operator").textContent = "+";
}

function displayMultiplyQuestion(num1, num2) {
    document.getElementById("operand1").textContent = num1
    document.getElementById("operand2").textContent = num2
    document.getElementById("operator").textContent = "x";
}

function displaySubtractQuestion(num1, num2) { 
    document.getElementById("operand1").textContent = num1 > num2 ? num1 : num2;
    document.getElementById("operand2").textContent = num2 < num1 ? num2 : num1;
    document.getElementById("operator").textContent = "-";
}

function displayDivisionQuestion(num1, num2) {
    document.getElementById("operand1").textContent = num1 > num2 ? num1 : num2;
    document.getElementById("operand2").textContent = num2 < num1 ? num2 : num1;
    document.getElementById("operator").textContent = "/";
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer-box").value);
    const num1 = parseInt(document.getElementById("operand1").innerText);
    const num2 = parseInt(document.getElementById("operand2").innerText);
    const operator = document.getElementById("operator").innerText;
    const answer = calculateAnswer(num1, num2, operator);
    
    
    if (userAnswer === answer) {
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }

    resetAnswer()
}

function calculateAnswer(firstNumber, secondNumber, operator) {
    let answer = 0;
    if (operator === "+") {
        answer = firstNumber + secondNumber;
    } 

    if (operator === "x") {
        answer = firstNumber * secondNumber;
    }

    if (operator === "-") {
        answer = firstNumber - secondNumber;
    }

    if (operator === "/") {
        answer = firstNumber / secondNumber;
    }
 return answer;
 
}

function resetAnswer() {
    const userAnswer1 = document.getElementById("answer-box");
    userAnswer1.value = "";
}
