<template>
  <div class="pokemon-detail">
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.image" :alt="pokemon.name">
    <p>Type: {{ pokemon.type }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('pokemon', ['allPokemons']),
    pokemon() {
      return this.allPokemons.find(p => p.id === this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.pokemon-detail {
  text-align: center;
}
</style>
