<script setup>
import {ref, computed} from 'vue'
import TodoForm from "./TodoForm.vue"
import TodoFilter from "./TodoFilter.vue"
import TodoItem from "./TodoItem.vue"

// cria um array vazio para armazenar as tarefas
const tarefas = ref([])

// Cria um filtro inicial padrão marcado como todas
const filtroAtual = ref('todas')

// Função para receber a tarefa escrita pelo usuário e adicionar um id, texto e se ela está concluída ou não
function recebeNovaTarefa(textoRecebido){
    const novaTarefa = {
        // Id incluído para garantir a eficácia no tratamento das tarefas
        id: Date.now(), 
        texto: textoRecebido,
        concluida: false
    }

    tarefas.value.push(novaTarefa)
}

// Função para remover as tarefas baseadas pelo id delas
function removeTarefa(idRecebida){
    tarefas.value = tarefas.value.filter(tarefa => tarefa.id !== idRecebida)
}

// Função para marcar e desmarcar as tarefas como concluídas com base no id delas
function concluiTarefa(idRecebida){
    const item = tarefas.value.find(tarefa => tarefa.id === idRecebida);

    // Garante que o concluído possa voltar para false
    if (item){
        item.concluida = !item.concluida
    }
}

// Função para aplicação de filtro das tarefas
function aplicarFiltro(novoFiltro){
    filtroAtual.value = novoFiltro
}

// Gera a lista de tarefas filtrada dinamicamente sem alterar o array original contendo todas as tarefas
const tarefasFiltradas = computed(() => {
    // Altera para mostrar apenas as tarefas pendentes
    if (filtroAtual.value === "pendentes"){
        return tarefas.value.filter(tarefa => !tarefa.concluida)
    }
    // Altera para mostrar apenas as tarefas concluídas
    if(filtroAtual.value === "concluidas"){
        return tarefas.value.filter(tarefa => tarefa.concluida)
    }

    // Mostra todas as tarefas
    return tarefas.value
})

</script>

<template>
    <div>
        <!-- Parte superior para adicionar as tarefas -->
        <section>    
            <TodoForm @adicionarItem="recebeNovaTarefa"/>
        </section>

        <!-- Parte inferior que contém todas as nossas tarefas! -->
        <section>
            <!-- Fieldset feito fora do TodoItem.vue para evitar criação dele toda vez ao adicionar uma nova tarefa! -->
            <fieldset class="fieldsetTarefas"> 
                <legend class="legendTarefas">Tarefas</legend>
                    <!-- Filtro das tarefas -->
                    <TodoFilter @mudarFiltro="aplicarFiltro" />
                    <ul>
                        <!-- TodoItem, por gerar apenas o item individual, ele cria o li dentro já do ul -->
                        <TodoItem 
                            v-for="tarefa in tarefasFiltradas"
                            :key="tarefa.id"
                            :tarefa="tarefa" 
                            @removerItem="removeTarefa"
                            @itemConcluido="concluiTarefa"
                        />
                    </ul>
            </fieldset>
        </section>

    </div>

</template>