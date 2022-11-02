class Calculator{
    static result = 0;

    static add(number){
        this.result += number;
    }

    static sub(number){
        this.result -= number;
    }

    static mul(number){
        this.result *= number;
    }

    static div(number){
        this.result /= number;
    }

    static{
        console.log("Hello Static!");
    }
}

console.log(Calculator.result);

Calculator.add(5);
console.log(Calculator.result);

Calculator.sub(2);
console.log(Calculator.result);

Calculator.mul(10);
console.log(Calculator.result);

Calculator.div(5);
console.log(Calculator.result);