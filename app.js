var number1 = document.getElementById("num1");
var printButton = document.getElementById("printBtn");
var printValue = document.getElementById("Enterednumber");
function printvalue() {
    var num1 = parseFloat(number1.value);
    printValue.textContent = num1.toString();
}
printButton.addEventListener("click", printvalue);
