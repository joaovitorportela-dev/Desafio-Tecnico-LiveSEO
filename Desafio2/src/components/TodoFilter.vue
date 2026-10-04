<!-- Responsável pelo filtro das tarefas -->
 <script setup>
// Define os filtros que esse componente pode mandar para o componente pai
    const emit = defineEmits(['mudarFiltro'])
</script>

 <template>
    <div class="divFiltro">
        <!-- Filtro para mostrar todas as tarefas -->
        <label for="todas">
            <input class="filtros" type="radio" id="todas" name="filtros" checked @change="emit('mudarFiltro', 'todas')">
            Todas
        </label>
        <!-- Filtro para mostrar apenas as pendentes -->
        <label for="pendentes">
            <input class="filtros" type="radio" id="pendentes" name="filtros" @change="emit('mudarFiltro', 'pendentes')">
            Pendentes
        </label>
        <!-- Filtro para mostrar apenas as concluídas -->
        <label for="concluidas">
            <input class="filtros" type="radio" id="concluidas" name="filtros" @change="emit('mudarFiltro', 'concluidas')">
            Concluídas
        </label>
    </div>
 </template>