class Operations {
    static add(num1, num2) {
        return num1 + num2;
    }
    static subtract(num1, num2) {
        return num1 - num2;
    }
    static multiply(num1, num2) {
        return num1 * num2;
    }
    static divide(num1, num2) {
        return num1 / num2;
    }  
}

class Calculator {
    currentStep;
    firstNum;
    secondNum;
    operation;
    constructor(firstStep) {
        this.currentStep = firstStep;
    }
    changeInstructions(instruction) {
        document.getElementById("instructions").value = instruction;
    }
    
    getInput() {
        return document.getElementById("input").value;
    }
    
    changeInput(number) {
        document.getElementById("input").value = number;
    }
    
    changeButtonValue (value) {
        document.getElementById("button").value = value;
    }
    
    changeAllValues(instructions, input, button) {
        this.changeInstructions(instructions);
        this.changeInput(input);
        this.nextButton(button);
    
    }

    incrementStep() {
        this.currentStep++;
    }

    resetStep() {
        this.currentStep = 0;
    }

    performOperation() {
        if (this.operation.toLowerCase() === "add") {
            return Operations.add(this.firstNum, this.secondNum);
        } else if (this.operation.toLowerCase() === "subtract") {
            return Operations.subtract(this.firstNum, this.secondNum);
        } else if (this.operation.toLowerCase() === "multiply") {
            return Operations.multiply(this.firstNum, this.secondNum);
        } else if (this.operation.toLowerCase() === "divide") {
            return Operations.divide(this.firstNum, this.secondNum);
        }
    } 

    moveToNextStep() {
        // console.log("hi");
        console.log(this.currentStep)

        switch (this.currentStep) {
            case 0:
                this.changeAllValues("Type First Number:", "", "NEXT");
                this.firstNum = this.getInput();
                this.incrementStep();
                break;
            case 1:
                this.changeAllValues("Type Second Number:", "", "NEXT");
                this.secondNum = this.getInput();
                this.incrementStep();
                break;
            case 2:
                this.changeAllValues("Choose Operator:", "", "SOLVE!");
                this.operation = this.getInput();
                this.incrementStep();
                break;
            case 3:
                this.changeAllValues("Your Answer is:", this.performOperation(), "RESTART!");
                this.resetStep();
                break;
            
        }
    }
   
    nextButton() {
        document.getElementById("button").addEventListener("click", this.moveToNextStep);
        // console.log("hi")
    }
}

function mainCalculator() {
    const calculator = new Calculator(0);
    calculator.nextButton();
}
mainCalculator();
// nextButton();
