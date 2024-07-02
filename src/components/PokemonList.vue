<template>
  <div class="pokemon-list">
    <div v-for="pokemon in pokemons" :key="pokemon.id" @click="viewPokemon(pokemon)" class="pokemon-item">
      <img :src="pokemon.image" :alt="pokemon.name">
      <p>{{ pokemon.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('pokemon', ['allPokemons']),
    pokemons() {
      return this.allPokemons.slice(0, 10);
    }
  },
  methods: {
    viewPokemon(pokemon) {
      this.$router.push({ name: 'pokemon', params: { id: pokemon.id } });
    }
  },
  created() {
    this.$store.dispatch('pokemon/fetchPokemons');
  }
};
</script>

<style scoped>
.pokemon-list {
  display: flex;
  flex-wrap: wrap;
}
.pokemon-item {
  width: 100px;
  margin: 10px;
  cursor: pointer;
}
.pokemon-item img {
  width: 100%;
}
</style>
