const inputSenha = document.querySelector('#password')
const inputLength = document.querySelector('#password-length')

document.querySelector('#Copiar-1').addEventListener('click',copy)
document.querySelector('#Copiar-2').addEventListener('click',copy)

let inputLengthValue = 8

function gerar_senha(){
    const chars = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]'

    let password = ''

    for(let i  = 0; i < inputLengthValue; i++ ){
        const randomNunber = Math.floor(Math.random()* chars.length)

      password += chars.substring(randomNunber,randomNunber+1)

    }
    inputSenha.value = password
}


function copy(){
    navigator.clipboard.writeText(inputSenha.value)
}

inputLength.addEventListener('input',function(){
    gerar_senha()

inputLengthValue = inputLength.value

})

gerar_senha()
