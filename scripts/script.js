let charCountInput = document.querySelector("#char-count");
let numCountInput = document.querySelector("#num-count");
let specCountInput = document.querySelector("#spec-count");
let generateBtn = document.querySelector("#generate-btn");
let copyBtn = document.querySelector("#copybtn");
let result = document.querySelector("#result");

let genPass = (e) => {
    e.preventDefault();

    let charCount = parseInt(charCountInput.value);
    let numCount = parseInt(numCountInput.value);
    let specCount = parseInt(specCountInput.value);

    let alphaCount = charCount - (numCount + specCount);

    if (alphaCount < 0) {
        alert("Total characters must be >= numbers + special characters");
        return;
    }

    if (isNaN(charCount) || isNaN(numCount) || isNaN(specCount)) {
        alert("Please enter valid numbers");
        return;
    }

    let key1 = genAlpha(alphaCount);
    let key2 = genNum(numCount);
    let key3 = genSpec(specCount);

    let password = key1 + key2 + key3;

    let shuffledPass = shuffle([...password]).join("");

    result.value = shuffledPass;
}

generateBtn.addEventListener("click", genPass);

let genAlpha = (alphaCount) => {
    let alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let alphaPass = "";
    let alphaChar = "";

    for (let i = 0; i < alphaCount; i++) {
        alphaChar = alphaArr[Math.floor(alphaArr.length * Math.random())];
        alphaPass = alphaPass + alphaChar;
    }

    return alphaPass;
}

let genNum = (numCount) => {
    let numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let numPass = "";
    let numChar = "";

    for (let j = 0; j < numCount; j++) {
        numChar = numArr[Math.floor(numArr.length * Math.random())];
        numPass = numPass + numChar;
    }

    return numPass;
}

let genSpec = (specCount) => {
    let specArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", ";", ":", "'", "\"", "<", ">", ",", ".", "?", "/", "`", "~"];
    let specPass = "";
    let specChar = "";
    for (let k = 0; k < specCount; k++) {
        specChar = specArr[Math.floor(specArr.length * Math.random())];

        specPass = specPass + specChar;
    }

    return specPass;
}

let shuffle = (arr) => {
    for(let i = arr.length - 1; i > 0 ; i--) {
        // selecting a random index for shuffling at a given value of i
        let j = Math.floor(Math.random() * (i + 1));

        // swaping
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// making copy button functional

copyBtn.addEventListener("click", () => {

    let key = result.value;

    if(key  === "") {
        alert("generate the password first");
        return;
    }

    navigator.clipboard.writeText(key);
    copyBtn.innerText = "copied!";

    setTimeout(() => {
        copyBtn.innerText = "copy";
    }, 1500);
})