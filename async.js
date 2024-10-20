async function cepAsync() {
    const cep = document.getElementById("cep").value;  // Obtém o valor do CEP inserido
    const url = `https://viacep.com.br/ws/${cep}/json/`;  // Monta a URL para a consulta

    const response = await fetch(url);  // Faz a requisição para a API ViaCEP
    const data = await response.json();  // Converte a resposta para JSON

    if (!data.erro) {
        // Preenche os campos com os dados retornados pela API
        document.getElementById("uf").value = data.uf;
        document.getElementById("localidade").value = data.localidade;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("complemento").value = data.complemento || '';  // Se não houver complemento, exibe vazio
    }
}