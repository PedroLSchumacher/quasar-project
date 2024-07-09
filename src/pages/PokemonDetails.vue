<template>
  <div>
    <h1>Pokemon Details</h1>
    <p>Name: {{ pokemon.name }}</p>
    <p>Type: {{ pokemon.type }}</p>
  </div>
</template>

<script>
export default {
  name: 'PokemonDetails',
  data() {
    return {
      pokemon: {
        name: 'Pikachu',
        type: 'Electric'
      }
    };
  }
};
</script>

<style scoped>
</style>
