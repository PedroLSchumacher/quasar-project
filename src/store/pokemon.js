// src/store/pokemon.js
import { db } from '../firebase';

const state = {
  pokemons: []
};

const mutations = {
  setPokemons(state, pokemons) {
    state.pokemons = pokemons;
  },
  addPokemon(state, pokemon) {
    state.pokemons.push(pokemon);
  },
  updatePokemon(state, updatedPokemon) {
    const index = state.pokemons.findIndex(pokemon => pokemon.id === updatedPokemon.id);
    if (index !== -1) {
      state.pokemons.splice(index, 1, updatedPokemon);
    }
  }
};

const actions = {
  async fetchPokemons({ commit }) {
    const snapshot = await db.collection('pokemons').get();
    const pokemons = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    commit('setPokemons', pokemons);
  },
  async addPokemon({ commit }, pokemon) {
    const docRef = await db.collection('pokemons').add(pokemon);
    commit('addPokemon', { id: docRef.id, ...pokemon });
  },
  async updatePokemon({ commit }, pokemon) {
    await db.collection('pokemons').doc(pokemon.id).set(pokemon);
    commit('updatePokemon', pokemon);
  }
};

const getters = {
  allPokemons: (state) => state.pokemons
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
