function encrypt() {
    const inputText = document.getElementById("inputText").value;
    let encryptedText = "";
    let encryptedNumber = "";

    for (let i = 0; i < inputText.length; i++) {
        const charCode = inputText.charCodeAt(i);
        encryptedText += charCode + " ";
        encryptedNumber += charCode.toString();
    }

    document.getElementById("encryptedText").textContent = encryptedText;
    document.getElementById("encryptedNumber").textContent = encryptedNumber;
}

function decrypt() {
    const inputNumber = document.getElementById("inputNumber").value;
    let decryptedNumber = "";
    let decryptedText = "";

    for (let i = 0; i < inputNumber.length; i++) {
        const charCode = parseInt(inputNumber.charAt(i));
        decryptedNumber += charCode + " ";
        decryptedText += String.fromCharCode(charCode);
    }

    document.getElementById("decryptedNumber").textContent = decryptedNumber;
    document.getElementById("decryptedText").textContent = decryptedText;
}
