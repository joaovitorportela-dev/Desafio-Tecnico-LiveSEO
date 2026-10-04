<!-- Responsável pela parte do formulário do TODO LIST -->
<script setup>
import {ref} from 'vue'

// constante criada para sempre atualizar conforme o usuário digita
const texto = ref('')

// constante criada para enviar o que o usuário digitou para o componente pai, no caso TodoList.vue
const emit = defineEmits(['adicionarItem'])

// função para a lógica de enviar para o componente pai, no caso TodoList.vue
function enviarTarefa(){
    if (texto.value.trim() === "") return // valida se o campo não está vazio
    emit('adicionarItem', texto.value) 
    texto.value = '' // limpa o input após enviar
}
</script>

 <template>
    <!-- Formulário para envio do TODO List  -->
    <form @submit.prevent="enviarTarefa" class="formulario"> 
        <h1>To-Do List</h1>
        <div class="divformulario">
            <input type="text" placeholder="Insira sua tarefa" class="inputForm" v-model="texto" required>
            <button type="submit" class="addTarefa">Adicionar tarefa</button>
        </div>
    </form>

</template>