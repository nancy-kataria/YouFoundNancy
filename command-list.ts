// export const commandList = {
//     "skills": {
//         elements: {
//             "pre": "prompt-response clear"
//         },

//     },
//     "dev": {
//         elements: ["a"],
//         text: ["https://dev.to/nancy_kataria"]
//     },
//     "status": {
//         elements: ["p"],
//         text: ["Currently learning about Machine Learning"]
//     },
//     "projects": {
//         elements: ["div", "div"]
//     }
// }

export const Skills = () => {
    const element = document.getElementById("command-block");
    // create an element
    const childElement = document.createElement("pre");
    // add the element to the DOM
    element?.appendChild(childElement);

    // Assign id, classname and text
    childElement.id = `skills`;
    childElement.className = "prompt-response clear";
    childElement.textContent = `[HTML, CSS, JavaScript, TypeScript, React, Python]`;

    // add the input element after the response
    const re_render_element = document.getElementById("prompt-line");
    element?.appendChild(re_render_element);
}