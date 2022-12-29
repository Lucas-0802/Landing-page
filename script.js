
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

window.onload = () => 
    fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
    .then(transformarEmJson)
    .then(exibirNaTela)


    function transformarEmJson(response) {
       return response.json()
    }

    function exibirNaTela(dados) {
        
        let container = document.querySelector('.containerSelecao')
        
        for(let c = 0; c <= dados.products.length -1; c++) {
         container.innerHTML += ` 
            <div class="card">
            <div class="img"><img src="${dados.products[c].image}"></div>
            <span class="nome">${dados.products[c].name}</span>
            <span class="descricao">${dados.products[c].description}</span>
            <div><span class="span">De:</span><span class="precoAntigo">R$${dados.products[c].oldPrice}</span></div>
            <div><strong><span class="span">Por:</span> <span class="precoAtual">R$${dados.products[c].price}</span></strong></div>
            <span class="parc"> ou ${dados.products[c].installments.count}x de R$ ${dados.products[c].installments.value}</span>
            <button id="comprar">Comprar</button>
            </div>`
       }

       let maisOpcoes = document.querySelector('.maisProdutos')

       maisOpcoes.onclick = function() {
        fetch(`https://${dados.nextPage}`)
        .then(transformarEmJson)
        .then(exibirNaTela)
       }
    }


    fetch('http://api.mathjs.org/v4/', {method: 'POST', body: JSON.stringify({ "expr": "20 * (((1 + 0.00517) ^ 24 - 1) / 0.00517)" })})