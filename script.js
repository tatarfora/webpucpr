function verifyCPF(cpf) {
    const rgx = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    return rgx.test(cpf)
}

function submitForm() {
    let name = document.getElementById("name").value
    let cpf = formatCPF(document.getElementById("cpf").value)

    console.log(cpf)

    if(name.trim() == "" || cpf == "") {
        alert("Digite um nome/cpf válido.")
        return
    }

    if(verifyCPF(cpf)) {
        alert("O CPF de " + name + " é válido")
    }
    else {
        alert("O CPF de " + name + " é inválido")
    }
}

function formatCPF(cpf) {
    return cpf.trim().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

function maskCPF(input){
    let cpf = input.value
    
    if(isNaN(cpf[cpf.length - 1])){ // impede entrar outro caractere que não seja número
       input.value = cpf.substring(0, cpf.length-1)
       return
    }
    
    input.setAttribute("maxlength", "14")
    if (cpf.length == 3 || cpf.length == 7) input.value += "."
    if (cpf.length == 11) input.value += "-"
 }

 function maskName(input) {
    let name = input.value

    const allowedCaracters = /^[a-z]/
    if(!allowedCaracters.test(name[name.length - 1])) {
        input.value = name.substring(0, name.length - 1)
        return;
    }
 }