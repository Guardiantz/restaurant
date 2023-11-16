import { itActsAsFavoriteRestoModel } from './contacts/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriterRestoArray = {
  getRestoran(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return, , eqeqeq
    return favoriteRestaurants.find((resto) => resto.id == id);
  },

  getSemuaRestoran() {
    return favoriteRestaurants;
  },

  putRestoran(resto) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getRestoran(resto.id)) {
      return;
    }

    favoriteRestaurants.push(resto);
  },

  deleteRestoran(id) {
    favoriteRestaurants = favoriteRestaurants.filter((resto) => resto.id !== id);
  },

  searchRestoran(query) {
    return this.getSemuaRestoran().filter((resto) => {
      const loweredCaseRestoTitle = (resto.title || '-').toLowerCase();
      const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });

  itActsAsFavoriteRestoModel(FavoriterRestoArray);
});
