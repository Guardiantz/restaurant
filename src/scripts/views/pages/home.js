import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <hero></hero>
      <section class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants">
          <div class="restaurants__list" id="restaurantsList">
            ${await this._renderRestaurants()}
          </div>
        </div>
      </section>
    `;
  },

  async _renderRestaurants() {
    const restaurants = await RestaurantSource.daftarRestoran();
    return restaurants
      .map((restaurant) => createRestaurantItemTemplate(restaurant))
      .join('');
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurantsList');
    restaurantsContainer.innerHTML = await this._renderRestaurants();
  },
};

export default Home;
