<template>
  <div>
    <pokemon-list />
    <router-link to="/add-pokemon">Add Pokémon</router-link>
  </div>
</template>

<script>
import PokemonList from 'components/PokemonList.vue';

export default {
  components: {
    PokemonList
  }
};
</script>
