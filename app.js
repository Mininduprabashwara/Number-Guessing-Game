console.log("hello");
function guessBtnOnAction(){
    let number =  Math.floor(Math.random() * 10);
    let num= document.getElementById("num").value;
    if(number==num){
        alert("Your guess is Correct : "+num);
        console.log("Correct! You win...")
    }else if (number>num) {
      alert(num+" is too high. Go lower.");
      console.log("Auto generated num : "+number,"\nGuessed One : "+num)
    } else {
      alert(num+" is too low. Go higher.");
      console.log("Auto generated num : "+number,"\nGuessed One : "+num)
      
    }
}