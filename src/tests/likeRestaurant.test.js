
import FavoriteRestaurantIdb from '../scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';


describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestoran({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestoran(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getSemuaRestoran()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestoran(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getSemuaRestoran()).toEqual([]);
  });
});
