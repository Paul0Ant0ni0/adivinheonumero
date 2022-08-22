

function gerar(){
    let num = document.getElementById("entrada").value;
    //O comando Math.ceil arrendonda o número para inteiro
    //Já o comando Math.random()*(max - min) + min) gera números randomicos.
    let num2 = Math.ceil(Math.random()*(10 - 1) + 1);

    if(num != "" || num != null || num != Number){
        if(num == num2){
            alert("Acertou")
            document.getElementById("entrada").value = ''
        }else{
            alert("Errou #1F613" )
            document.getElementById("entrada").value = ''
            
        }
       
    }else{
        alert("Digite um valor válido!")
        
    }
}