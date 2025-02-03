export default function Skills(){
    const element = document.getElementById("command-block");

    // create an element
    const childElement = document.createElement("p");
    // add the element to the DOM
    element?.appendChild(childElement);

    // Assign id, classname and text
    childElement.id = `skills`;
    childElement.className = "prompt-response clear";
    childElement.textContent = `[HTML, CSS, JavaScript, TypeScript, React, Python]`;
}