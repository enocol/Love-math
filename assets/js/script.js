document.addEventListener("DOMContentLoaded", function(){ 
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
           if (this.getAttribute("data-type") === "submit") {
               alert("You clicked Submit!");
           } else {
               const gameType = this.getAttribute("data-type");
               alert(`You clicked ${gameType}`);
           }
        });
    }
});
