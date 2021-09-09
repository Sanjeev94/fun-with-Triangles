const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");
// console.log(inputs[0]);

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle() {
    // console.log("from triangle");
    // calculateSumOfAngles(45, 45, 90);
    // console.log(typeof inputs[0].value, inputs[1].value, inputs[2].value);
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),
    Number(inputs[1].value),Number(inputs[2].value),);
    // console.log(sumOfAngles);
    if(sumOfAngles===180) {
        // console.log("Angles form a triangle");
        outputEl.innerText = "Angles form a triangle";
    }
    else {
        // console.log("The angles don't form a triangle");
        outputEl.innerText = "The angles don't form a triangle";
    }

}

isTriangleBtn.addEventListener("click", isTriangle)