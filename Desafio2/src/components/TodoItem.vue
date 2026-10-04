<!-- Responsável por cada tarefa criada -->
 
<script setup>
    // armazena em uma variável a tarefa recebida pelo componente pai para podermos trabalhar com ela
    const props = defineProps(['tarefa'])
    
    const emit = defineEmits(['removerItem' , 'itemConcluido'])
    
    // Função para avisar ao componente pai para remover a tarefa inserida
    function removerTarefa(){
        emit('removerItem', props.tarefa.id) 
    }

    // Função para avisar ao componente pai para alterar a tarefa para concluída
    function tarefaConcluida(){
        emit('itemConcluido', props.tarefa.id) 
    }

</script>

<template>
        <li>
            <div class="divItem">
                <!-- Mostra o nome da tarefa que o usuário inseriu e caso for concluido o testo é riscado -->
                <span :class="{ 'concluida': tarefa.concluida }">{{tarefa.texto}}</span>
                <div class="divLabelInput">
                    <label class="labelConcluir">
                        <!-- Input com o modelo checkbox para podermos marcar e desmarcar como concluído -->
                        <input type="checkbox" class="checkbox" :checked="tarefa.concluida" @click="tarefaConcluida">Concluir
                    </label>
                    <button type="button" class="btnRemover" @click="removerTarefa">Remover</button>
                </div>
            </div>
        </li>
</template>