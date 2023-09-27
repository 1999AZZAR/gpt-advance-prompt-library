// script.js

// Function to copy code to the clipboard
function copyCode() {
    var clickedButton = event.target;
    var codeContainer = clickedButton.parentElement.querySelector('article');

    if (codeContainer) {
        var textToCopy = codeContainer.textContent;
        var dummyTextArea = document.createElement('textarea');
        dummyTextArea.value = textToCopy;
        document.body.appendChild(dummyTextArea);
        dummyTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(dummyTextArea);
        alert('Copied text: ' + textToCopy);
    }
}
