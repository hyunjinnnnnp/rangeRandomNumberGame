const inputRange = document.querySelector(".inputRange"),
inputNumber=document.querySelector(".inputNumber"),
playBtn=document.querySelector(".playBtn"),
result=document.querySelector(".result");

const yourNumber=document.querySelector(".yourNumber"),
machineNumber=document.querySelector(".machineNumber"),
numberGenerator=document.querySelector(".numberGenerator");
//선택한 레인지 범위를 벗어난 숫자를 입력하면 '오류' 출력
//레인지 밸류 값을 받아서 미니멈,맥시멈 확인하기

/*Find a  random number on a range between 0 and a number defined by the user.
Use range input.
Update the range value in real time.
Only play after the user chooses a number.
Notify the user if the game is lost or won.
Don't give up.

 */

function handleBtn(event){
    event.preventDefault();
    const currentValue=inputNumber.value;
yourNumber.innerHTML=currentValue;
//inputNumber.value="";

const currentRange=inputRange.value;
const randomNumber=Math.floor(Math.random()*currentRange);  // 비트윈 0,2일 때 2는 출력하지않음 - 체크하기
machineNumber.innerHTML=randomNumber;

//랜덤넘버와 인풋에서 받은 넘버가 일치할때
if(currentValue === randomNumber){
    result.innerHTML='You won'
}else{
    result.innerHTML="You lost"
}
}

function handleRange(event){
    const currentValue=inputRange.value;
    numberGenerator.innerHTML=currentValue;
}

function init(){
    playBtn.addEventListener("click", handleBtn);
    inputRange.addEventListener("change", handleRange);
}
init();

