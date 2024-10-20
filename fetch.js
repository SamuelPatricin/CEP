function cepFetch() {
    const cep = document.getElementById("cep").value;  // Obtém o valor do CEP inserido
    const url = `https://viacep.com.br/ws/${cep}/json/`;  // Monta a URL para a consulta

    fetch(url)  // Faz a requisição para a API ViaCEP
        .then(response => response.json())  // Converte a resposta para JSON
        .then(data => {
            if (!data.erro) {
                // Preenche os campos com os dados retornados pela API
                document.getElementById("uf").value = data.uf;
                document.getElementById("localidade").value = data.localidade;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("complemento").value = data.complemento || '';  // Se não houver complemento, exibe vazio
            }
        });
}