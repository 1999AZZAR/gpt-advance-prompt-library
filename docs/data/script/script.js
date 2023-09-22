// script.js

// Function to copy code to the clipboard
function copyCode() {
    const codeElement = document.querySelector("article");
    const text = codeElement.textContent || codeElement.innerText;
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Code copied to clipboard!");
}

