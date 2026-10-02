console.log("hello");

let number = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let maxAttempts = 3;

function guessBtnOnAction() {
    let num = Number(document.getElementById("num").value);

    if (num < 1 || num > 10 || isNaN(num)) {
    Swal.fire({title: "Invalid Number!",text: "Please enter a number between 1 and 10.",icon: "warning"});
        return;
    }
    attempts++;

    if (number == num) {
        Swal.fire({title: "🎉 Correct!",text: "Your guess is correct: " + num,icon: "success",draggable: true});
        console.log("Correct! You win...");
        console.log("Attempts: " + attempts);

        newGame();

    } else if (num < number) {
        if (attempts < maxAttempts) {
            Swal.fire({title: "Too Low!",text: num + " is too low. Go higher.",icon: "info"});
            console.log("Auto generated num : " + number,"\nGuessed One : " + num );
        }

    } else {
        if (attempts < maxAttempts) {
            Swal.fire({title: "Too High!",text: num + " is too high. Go lower.",icon: "info"});
            console.log("Auto generated num : " + number, "\nGuessed One : " + num);
        }
    }

    if (attempts == maxAttempts && number != num) {
        Swal.fire({title: "😢 Game Over!",text: "The correct number was " + number,icon: "error",draggable: true});
        console.log("Game Over!");
        console.log("Correct number : " + number);
        newGame();
    }
}

function newGame() {
    number = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById("num").value = "";
    console.log("New game started");
}