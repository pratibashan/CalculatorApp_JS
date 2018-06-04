
function Calculator(firstNumber,secondNumber) {
    this.firstNumber = firstNumber
    this.secondNumber = secondNumber
}

Calculator.prototype.fnAdd = function () {
    var answer = parseInt(this.firstNumber) + parseInt(this.secondNumber)
    return answer
}

Calculator.prototype.fnSubtract = function () {
    var answer = parseInt(this.firstNumber) - parseInt(this.secondNumber)   
    return answer
}

Calculator.prototype.fnMultiply = function () {
    var answer = parseInt(this.firstNumber) * parseInt(this.secondNumber)    
    return answer
}

Calculator.prototype.fnDivide = function () {
    var answer = parseInt(this.firstNumber) / parseInt(this.secondNumber)    
    return answer
}
// Calculator.prototype.fndisplayResult = function(oper,answer) {
//     var lbl = document.createElement("labelResult")
//     lbl.htmlFor = this.firstNumber + oper + this.secondNumber +" = "+ answer
//     console.log(lbl.htmlFor)
//     document.flex-container.appendChild(lbl)
// }
