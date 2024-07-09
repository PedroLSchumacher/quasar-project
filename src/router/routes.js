import PokemonIndex from 'src/pages/PokemonIndex.vue';
import PokemonDetail from 'src/pages/PokemonDetails.vue';
import AddPokemon from 'src/pages/AddPokemon.vue';

const routes = [
  { path: '/', component: PokemonIndex },
  { path: '/pokemon/:id', name: 'pokemon', component: PokemonDetail },
  { path: '/add-pokemon', component: AddPokemon }
];

export default routes;
