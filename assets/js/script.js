document.addEventListener("DOMContentLoaded", function(){ 
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
           if (this.getAttribute("data-type") === "submit") {
               alert("You clicked Submit!");
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
  
    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}, aborting!`;
    }
}

function displayAdditionQuestion(num1, num2) {
    document.getElementById("operand1").textContent = num1;
    document.getElementById("operand2").textContent = num2;
    document.getElementById("operator").textContent = "+";
}
