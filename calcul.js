var Number1,Number2,Operetion;
var Depression ;

function PutNum(inputVal) {
    document.getElementById("outputField").value = (document.getElementById("outputField").value + inputVal)-0;
}
//функция для "+"
function operetion() {
    Number1 = enterValues("outputField");
    document.getElementById("outputField").value = 0;
    Depression = "+";
}

function operetion1(){
Number1 = enterValues("outputField");
    document.getElementById("outputField").value = 0;
    Depression = "-";
    }
function operetion2(){
    Number1 = enterValues("outputField");
    document.getElementById("outputField").value = 0;
    Depression = "/";
}
function operetion3(){
    Number1 = enterValues("outputField");
    document.getElementById("outputField").value = 0;
    Depression = "*";
}
//функция для равно
function equally() {
    Number2=enterValues("outputField");
    switch(Depression) {
        case "+":
            Operetion =Number1 + Number2;
            break;
        case "-":
            Operetion = Number1 - Number2;
            break;
        case "*":
            Operetion= Number1 * Number2;
            break;
        case "/":
            if (Number2 == 0) {
                alert("На 0 делить запрещено!");
            }
            else {
                Operetion = Number1 / Number2;
            }
            break;
    }document.calc.outputField.value = Operetion;
}
//функция для "."
function dot1() {
        document.calc.outputField.value +=".";
} 
//функция для "с"
function clear() {
    document.calc.outputField.value ="";

}
function enterValues(id) {
    var res = document.getElementById(id).value-0;
    if (!isNaN(res))
        return res;
    alert("В элементе " + id + " не число!!!");
}
//функция для "+/-"
function minus_plus() {
    document.calc.outputField.value = 0-document.calc.outputField.value;
}

window.onload = function () {
    for (var i = 0; i < 10; i++) {
        (function (inputVal) {
            document.getElementById("but_" + inputVal).onclick = function () {
                PutNum(inputVal);
            }
        })(i);
    }
    document.getElementById("plus").addEventListener("click", operetion);
    document.getElementById("equally").addEventListener("click", equally);
    document.getElementById("sub").addEventListener("click",operetion1);
    document.getElementById("mult").addEventListener("click", operetion3);
    document.getElementById("div").addEventListener("click",operetion2);
    document.getElementById("c").addEventListener("click", clear);
    document.getElementById("minusplus").addEventListener("click",  minus_plus);
    document.getElementById("dot").addEventListener("click", dot1);
};
