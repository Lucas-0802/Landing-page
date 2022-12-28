
let formulario = document.querySelector('#form')

formulario.onsubmit = function(evento) {
    evento.preventDefault()
    let erro = false

    let inputNome = document.forms['form']['nome']
    
    if(!inputNome.value) {
        erro = true
        inputNome.classList.add('inputError')
        let span = (inputNome.nextSibling.nextSibling)
         span.innerText = '*Digite o nome corretamente'
    } else {
        let span = (inputNome.nextSibling.nextSibling)
        inputNome.classList.remove('inputError')
        span.innerText = ''
    }

    let inputEmail = document.forms['form']['email']
    
    if(!inputEmail.value) {
        erro = true
        inputEmail.classList.add('inputError')
        let span = (inputEmail.nextSibling.nextSibling)
         span.innerText = '*Digite o email corretamente'
    } else {
        let span = (inputEmail.nextSibling.nextSibling)
        inputEmail.classList.remove('inputError')
        span.innerText = ''
    }

    let inputCpf = document.forms['form']['cpf']
    
    if(!inputCpf.value) {
        erro = true
        inputCpf.classList.add('inputError')
        let span = (inputCpf.nextSibling.nextSibling)
         span.innerText = '*Digite o CPF corretamente'
    } else {
        let span = (inputCpf.nextSibling.nextSibling)
        inputCpf.classList.remove('inputError')
        span.innerText = ''
    }

    let div = document.querySelector('.div')
    let inputRadio = document.forms['form']['opc']
    if(!inputRadio.value) {
        erro = true
        div.classList.add('inputError')
        let span = document.querySelector('.divErro')
        span.innerText = '*Marque o campo corretamente'
    } else {
        div.classList.remove('inputError')
        let span = document.querySelector('.divErro')
        span.innerText = ''
    }

    if(!erro) {
        alert('Formulário enviado com sucesso!')
        document.querySelector('#form').reset()
    }
}

let formulario2 = document.querySelector('#form2')

 formulario2.onsubmit = function(evento) {
    evento.preventDefault()
    let erro = false

    let inputNome = document.forms['form2']['nomeAmigo']
    
    if(!inputNome.value) {
        erro = true
        inputNome.classList.add('inputError')
        let span = (inputNome.nextSibling.nextSibling)
         span.innerText = '*Digite o nome corretamente'
    } else {
        let span = (inputNome.nextSibling.nextSibling)
        inputNome.classList.remove('inputError')
        span.innerText = ''
    }

    let inputEmail = document.forms['form2']['emailAmigo']
    
    if(!inputEmail.value) {
        erro = true
        inputEmail.classList.add('inputError')
        let span = (inputEmail.nextSibling.nextSibling)
         span.innerText = '*Digite o email corretamente'
    } else {
        let span = (inputEmail.nextSibling.nextSibling)
        inputEmail.classList.remove('inputError')
        span.innerText = ''
    }

    if(!erro) {
        const toast = document.querySelector('.toast')
        toast.classList.add('visible')
        setTimeout(() => {
            toast.classList.remove('visible')
        },5000)
        inputEmail.value = ''
        inputNome.value = ''
    }
}