import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createFavoriteRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="content">
        <h2 class="content__heading">Your Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants">
          <div class="restaurants__list" id="restaurantsList">
            ${await this._renderRestaurants()}
          </div>
        </div>
      </section>
    `;
  },

  async _renderRestaurants() {
    const restaurants = await FavoriteRestaurantIdb.getSemuaRestoran();
    return restaurants
      .map((restaurant) => createFavoriteRestaurantItemTemplate(restaurant))
      .join('');
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurantsList');
    restaurantsContainer.innerHTML = await this._renderRestaurants();
  },
};

export default Favorite;
