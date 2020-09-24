let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
        txtNome.style.display = "block"
    }else{
        txtNome.style.display = "none"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ){
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "red"
        txtEmail.style.display = "block"
    }else{
        txtEmail.style.display = "none"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Seu texto ultrapassa o limite de 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else{ 
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk==true && emailOk==true && assuntoOk==true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}