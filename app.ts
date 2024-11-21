const number1= document.getElementById("num1") as HTMLInputElement
const printButton= document.getElementById("printBtn") as HTMLButtonElement
const printValue= document.getElementById("Enterednumber") as HTMLOutputElement


function printvalue():void{
    const num1=parseFloat(number1.value)
    printValue.textContent=num1.toString();
}
printButton.addEventListener("click",printvalue);