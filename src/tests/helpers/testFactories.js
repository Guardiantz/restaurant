import LikeButtonInitiator from '../../scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../scripts/data/favorite-restaurant-idb';

const createLikeButtonInitiatorWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonInitiatorWithResto };