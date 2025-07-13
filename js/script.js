function validar() {
    var nome = form.nome.value;
    var email = form.email.value;
    var sexo = form.sexo.value;
    var logra = form.rua.value;
    var num = form.num.value;
    var estado = form.estado.value;
    var city = form.cidade.value;

    if (nome == "") {
        alert("Nome não informado!");
        form.nome.focus();
        return false;
    }
    if(email == ""){
        alert("Preencha o campo email!");
        form.email.focus();
        return false;
    }
    if(sexo == ""){
        alert("Preencha o campo sexo!");
        form.sexo.focus();
        return false;
    }
    if(logra == ""){
        alert("Preencha o campo Logradouro!");
        form.logra.value.focus();
        return false;
    }
    if(num == ""){
        alert("Preencha o campo Número!");
        form.num.focus();
        return false;
    }
    if(estado == ""){
        alert("Preencha o campo Estado!");
        form.estado.focus();
        return false;
    }
    if(city == ""){
        alert("Preencha o campo Cidade!");
        form.cidade.focus();
        return false;
    }
}
