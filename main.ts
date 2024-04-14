// Question 127: Convert a traditional function expression to an arrow function.

const traditionalFunction = function (a, b) {
    return a + b;
};

const arrowFunction = (a, b) => a + b;

console.log(traditionalFunction(5, 3));
console.log(arrowFunction(5, 3));

console.log("\n");

// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

const multiplyParameters = (...numbers: number[]) =>
    numbers.reduce((total, number) => total * number, 1);

console.log(multiplyParameters(2, 3, 4));

console.log("\n");

// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunction: () => {
        console.log("Arrow function:", this.value);
    },
};

traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();