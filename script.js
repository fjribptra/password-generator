const inputBox = document.getElementById('inputBox')
const generateButton = document.getElementById('generateButton')
const copyButton = document.getElementById('copyButton')
const passLength = document.getElementById('passLength')
const inputRange = document.getElementById('inputRange')

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbol = '`~!@#$%^&*()_-=+[]{}";:,.<>/?'

const allChars = upperCase + lowerCase + number + symbol

let length = 0;

inputRange.addEventListener('input', () => {
    length = inputRange.value
    passLength.textContent = inputRange.value
})


function createPassword() {
    let password = ""
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += number[Math.floor(Math.random()*number.length)]
    password += symbol[Math.floor(Math.random()*symbol.length)]
    while(length > password.length) {
        password += allChars[Math.floor(Math.random()*allChars.length)]
    }
    console.log(password)
    inputBox.value = password
}

generateButton.addEventListener('click', () => {
    createPassword()
})

copyButton.addEventListener('click', () => {
    inputBox.select()
    document.execCommand("copy")
})

