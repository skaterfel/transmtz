

function gerador(){
    var scriptFiliais = "";
    var diaSelecao = 0;
    document.getElementById("res").innerHTML = "";
    let diaSelecionado = document.getElementsByName("diaDaSemana")
    for(var i = 0; i < diaSelecionado.length; i++){
        if(diaSelecionado[i].checked){
           diaSelecao = diaSelecionado[i].value;
        }
    }
    let filiais = document.getElementsByName("filial");
    for(var i = 0; i < filiais.length; i++){
        if(filiais[i].checked){
           scriptFiliais += `03${filiais[i].value}${diaSelecao}s`; 
        }
    }
    
    document.getElementById("res").innerHTML = scriptFiliais;
}

function copy(){
    navigator.clipboard.writeText(res.innerHTML);
    alert("Script copiado com sucesso!")
    
    
}
