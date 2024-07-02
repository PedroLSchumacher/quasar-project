import PokemonIndex from 'pages/PokemonIndex.vue';
import PokemonDetail from 'pages/PokemonDetail.vue';
import AddPokemon from 'pages/AddPokemon.vue';

const routes = [
  { path: '/', component: PokemonIndex },
  { path: '/pokemon/:id', name: 'pokemon', component: PokemonDetail },
  { path: '/add-pokemon', component: AddPokemon }
];

export default routes;
