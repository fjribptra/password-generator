const inputBox = document.getElementById('inputBox')
const generateButton = document.getElementById('generateButton')
const copyButton = document.getElementById('copyButton')
const passLength = document.getElementById('passLength')
const inputRange = document.getElementById('inputRange')
const meter = document.getElementById('meter')
const meterWrapper = document.querySelector('.meter')
const plus = document.getElementById('plus')
const min = document.getElementById('min')

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbol = '`~!@#$%^&*()_-=+[]{}";:,.<>/?'

const allChars = upperCase + lowerCase + number + symbol

let length = 4;

inputRange.addEventListener('input', () => {
    length = inputRange.value
    passLength.textContent = inputRange.value
    changeMeter()
})

plus.addEventListener('click', function() {
    if (length === 50) return
    length ++ 
    inputRange.value = length
    passLength.textContent = length
    changeMeter()
})
min.addEventListener('click', function() {
    if (length === 4 ) return
    length --
    inputRange.value = length
    passLength.textContent = length
    changeMeter()
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
    inputBox.value = password
}

function changeMeter() {
    if(passLength < 5 ) {
        meter.textContent = 'Very Weak'
        meterWrapper.style.backgroundColor = 'red'
    } else if (passLength.textContent > 4 && passLength.textContent < 8) {
        meter.textContent = 'Weak'
        meterWrapper.style.backgroundColor = 'orange'
    } else if (passLength.textContent > 7 && passLength.textContent < 10) {
        meter.textContent = 'Good'
        meterWrapper.style.backgroundColor = 'green'
    } else if (passLength.textContent > 9 && passLength.textContent < 12) {
        meter.textContent = 'Very Strong'
        meterWrapper.style.backgroundColor = 'blue'
    }
}

generateButton.addEventListener('click', () => {
    createPassword()
})

copyButton.addEventListener('click', () => {
    inputBox.select()
    document.execCommand("copy")
})



