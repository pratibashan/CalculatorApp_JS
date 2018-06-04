
var tb1 = document.getElementById("number1")
var tb2 = document.getElementById("number2")


var btnAdd = document.getElementById("btn-add")
var btnSubtract = document.getElementById("btn-subtract")
var btnMultiply = document.getElementById("btn-multiply")
var btnDivide = document.getElementById("btn-divide")

var btnClear = document.getElementById("btn-clear")
var btnEqual = document.getElementById("btn-equal")

var operand = ""


var result = 0.0

btnAdd.addEventListener("click",function() {

    
    operand = "+"


    var num1 = tb1.value
    var num2 = tb2.value
    var cal = new Calculator(num1,num2)
    
        result = cal.fnAdd()
        console.log(result)  
               
})  

btnSubtract.addEventListener("click",function() {
    var num1 = tb1.value
    var num2 = tb2.value
    var cal = new Calculator(num1,num2)
    
        result = cal.fnSubtract()
        console.log(result)                 
})  
btnMultiply.addEventListener("click",function() {
    var num1 = tb1.value
    var num2 = tb2.value
    var cal = new Calculator(num1,num2)
    
        result = cal.fnMultiply()
        console.log(result)  
               
})  
btnDivide.addEventListener("click",function() {
    var num1 = tb1.value
    var num2 = tb2.value
    var cal = new Calculator(num1,num2)
    
        result = cal.fnDivide()
        console.log(result)  
})             

btnEqual.addEventListener("click",function() {  
        
    var num1 = tb1.value
    var num2 = tb2.value

    var cal = new Calculator() 
    cal.add(1,2)

    if(operand == "+") {

    }

        document.getElementById("result").innerHTML = "The result is " + result

})    

 btnClear.addEventListener("click",function() {   
    document.getElementById("number1").value = ""
    document.getElementById("number2").value = ""
    document.getElementById("result").innerHTML = ""

})    
