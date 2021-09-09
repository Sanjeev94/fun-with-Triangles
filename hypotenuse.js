const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector(".output");


function calculteSumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b;
    // console.log(sumOfSquares);
    return sumOfSquares;
}

function calculateHypotenuse() {
    //    console.log("Hypotenuse");
    const sumOfSquares = calculteSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    // console.log(lengthOfHypotenuse);
    outputEl.innerText = "The length of Hpypotenuse is: " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);