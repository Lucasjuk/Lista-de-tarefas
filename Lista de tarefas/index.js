function adicionarTarefa() {
    // Captura o campo de texto e o valor digitado pelo usuário
    const inputTarefa = document.getElementById("inputTarefa"); 
    const tarefa = inputTarefa.value.trim();
    // trim() remove espaços em branco no início e no final da string, garantindo que o usuário não adicione uma tarefa vazia apenas com espaços. 
    const mensagem = document.getElementById("mensagem");      

    if (tarefa == "") {
        mensagem.textContent = "Por favor, digite uma tarefa antes de adicionar."  
        mensagem.style.color = "red"; // cor de erro
        return; // para a execução aqui
    } else { 
        mensagem.textContent = "Tarefa adicionada com sucesso!";
        mensagem.innerHTML = 'Tarefa adicionada com <span style="color: green;">Sucesso</span>!';
        // span para destacar a palavra "Sucesso" em verde
    }

    // Busca a lista no HTML e cria um novo item <li>
    const listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");

    // Define o texto do novo item como a tarefa digitada
    novaTarefa.textContent = tarefa;

    // Cria o botão de apagar e define seu texto e aparência
    const botaoApagar = document.createElement("button");
    botaoApagar.textContent = "✕";
    botaoApagar.title = "Apagar tarefa";    // tooltip ao passar o mouse
    botaoApagar.className = "botao-apagar"; // aplica a classe CSS do botão de apagar

    // Ao clicar no botão, remove o <li> correspondente da lista
    botaoApagar.addEventListener("click", function () {
        listaTarefas.removeChild(novaTarefa);

        // Busca o elemento mensagem diretamente para garantir o acesso correto
        const mensagemAtual = document.getElementById("mensagem");

        // Se a lista ficou vazia, limpa a mensagem de sucesso
        if (listaTarefas.children.length === 0) {
            mensagemAtual.innerHTML = ""; // volta ao estado original sem nenhuma mensagem
        }
    });

    // Adiciona o botão de apagar dentro do item <li>
    novaTarefa.appendChild(botaoApagar);

    // Adiciona o novo item ao final da lista
    listaTarefas.appendChild(novaTarefa);

    // Limpa o campo de texto para a próxima tarefa
    inputTarefa.value = "";  
}

