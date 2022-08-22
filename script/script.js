

function gerar(){
    let num = document.getElementById("entrada").value;
    let num2 = Math.ceil(Math.random()*(10 - 1) + 1);

    if(num != "" || num != null || num != Number){
        if(num == num2){
            alert("Acertou")
            document.getElementById("entrada").value = ''
        }else{
            alert("Errou")
            document.getElementById("entrada").value = ''
        }
       
    }else{
        alert("Digite um valor válido!")
        
    }
}