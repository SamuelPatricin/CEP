function cepAjax() {
    // recupera o CEP que foi digitado pelo usuário
  let cep =  parseInt(document.getElementById("cep").value); 

    // cria objeto XMLHttpRequest que servirá para controlar a comunicação
    // do navegador com o servidor (site do ViaBrasil)
  let xhttp = new XMLHttpRequest();

  // prepara o tratamento da resposta 
  // deve ser feito antes de preparar e mandar a requisição
  xhttp.onreadystatechange = function() {
      // readState 4 = resposta recebida
      // status 200 = resposta OK
      console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
      let endereco = JSON.parse(this.responseText); 
      document.getElementById("uf").value=endereco.uf ;
      document.getElementById("localidade").value=endereco.localidade ;
      document.getElementById("bairro").value=endereco.bairro ;
      document.getElementById("logradouro").value=endereco.logradouro;
      document.getElementById("complemento").value=endereco.complemento ;
      
      
      
     // o que ocorrerá se retirar o comentário da linha abaixo? 
     //document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  // prepara a solicitação
  console.log('antes do open cep:'+cep);
  xhttp.open("GET", "https://viacep.com.br/ws/"+cep+"/json", true);
  // envia a solicitação
  console.log('antes do send');
  xhttp.send();
  console.log('depois do send');
}