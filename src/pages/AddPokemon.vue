<template>
  <div class="add-pokemon">
    <h1>Add a New Pokémon</h1>
    <form @submit.prevent="addPokemon">
      <input v-model="name" type="text" placeholder="Name" required>
      <input v-model="image" type="text" placeholder="Image URL" required>
      <input v-model="type" type="text" placeholder="Type" required>
      <button type="submit">Add Pokémon</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      image: '',
      type: ''
    };
  },
  methods: {
    addPokemon() {
      const newPokemon = {
        name: this.name,
        image: this.image,
        type: this.type
      };
      this.$store.dispatch('pokemon/addPokemon', newPokemon).then(() => {
        this.$router.push('/');
      });
    }
  }
};
</script>

<style scoped>
.add-pokemon {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
</style>
