import CONFIG from '../../globals/config';
import { createRestaurantItemTemplate } from './template-creator';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>City:</h4>
    <p>${restaurant.city}</p>
    <h4>Rating:</h4>
    <p>${restaurant.rating}</p>
    <h4>Address:</h4>
    <p>${restaurant.address}</p>
    <h4>Categories:</h4>
    <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__menu">
    <h3>Menu</h3>
    <div class="menu__foods">
      <h4>Foods</h4>
      <ul>
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
      </ul>
    </div>
    <div class="menu__drinks">
      <h4>Drinks</h4>
      <ul>
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
      </ul>
    </div>
  </div>
  <div class="restaurant__reviews">
    <h3>Customer Reviews</h3>
    <div id="customerReviews" class="customer__reviews">
      ${restaurant.customerReviews.map((review) => `
        <customer-review 
          name="${review.name}" 
          date="${review.date}" 
          review="${review.review}"
        ></customer-review>
      `).join('')}
    </div>
    <form id="reviewForm">
      <h4>Add Your Review</h4>
      <div class="form__group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div class="form__group">
        <label for="review">Review:</label>
        <textarea id="review" name="review" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
`;
const createFavoriteRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous"/>
      <div class="restaurant-item__header__rating">
        <p>⭐️ <span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <p>${restaurant.city}</p>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteRestaurantItemTemplate,
};
