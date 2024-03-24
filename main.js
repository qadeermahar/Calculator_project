import inquirer from "inquirer";
let ANS = await inquirer.prompt([{
        type: "number",
        name: "number1",
        message: "write a number",
    },
    {
        type: "number",
        name: "number2",
        message: "write a number",
    },
    {
        type: "list",
        name: "operater",
        message: "write a operater",
        choices: ["+", "-", "*", "/"],
    }]);
let { number1, number2, operater } = ANS;
if (number1 && number2 && operater) {
    let result = 0;
    if (operater === "+") {
        result = number1 + number2;
    }
    else if (operater === "-") {
        result = number1 - number2;
    }
    else if (operater === "*") {
        result = number1 * number2;
    }
    else if (operater === "/") {
        result = number1 / number2;
    }
    console.log(result);
}
else {
    "your opreater is incorrect";
}
console.log("The End");
