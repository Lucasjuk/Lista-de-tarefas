function adicionarTarefa() {
    // Captura o campo de texto e o valor digitado pelo usuário
    const inputTarefa = document.getElementById("inputTarefa"); 
    const tarefa = inputTarefa.value.trim();
    // trim() remove espaços em branco no início e no final da string, garantindo que o usuário não adicione uma tarefa vazia apenas com espaços. 
    const mensagem = document.getElementById("mensagem");      

    if (tarefa == "") {
        mensagem.textContent = "Por favor, digite uma tarefa antes de adicionar."  
        mensagem.style.color = "red"; // ✅ cor de erro;
        return; // para a execução aqui
    } else { 
        mensagem.textContent = "Tarefa adicionada com sucesso!";
        mensagem.innerHTML = 'Tarefa adicionada com <span style="color: green;">Sucesso</span>!';
        //span para destacar a palavra "Sucesso" em verde
    }

    // Busca a lista no HTML e cria um novo item <li>
    const listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");

    // Define o texto do novo item como a tarefa digitada
    novaTarefa.textContent = tarefa;

    // Adiciona o novo item ao final da lista
    listaTarefas.appendChild(novaTarefa);

    // Limpa o campo de texto para a próxima tarefa
    inputTarefa.value = "";  
}

