console.log("hello");
function guessBtnOnAction(){
    let number =  Math.floor(Math.random() * 10 +1);
    let num= document.getElementById("num").value;
    if(number==num){
        alert("Your guess is Correct : "+num);
        console.log("Auto generated num : "+number,"\nGuessed One : "+num)
    }else{
        alert("Your guess is inorrect : "+num);
        console.log("Auto generated num : "+number,"\nGuessed One : "+num)
    }
}