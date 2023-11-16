import RestaurantSource from '../../data/restaurant-source';
import { createFavoriteRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content-image">
    <img src="./images/heros/hero-image_2.jpg" alt="">
      </div>
        <div class="seni">
        <button>Explore Information</button>
      </div>
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
    console.log(restaurants);
    return restaurants
      .map((restaurant) => createFavoriteRestaurantItemTemplate(restaurant))
      .join('');
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurantsList');
    restaurantsContainer.innerHTML = await this._renderRestaurants();
  },
};

export default Home;
