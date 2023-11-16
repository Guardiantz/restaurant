import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getRestoran(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getSemuaRestoran() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  // async putRestoran(resto) {
  //   if (!resto.hasOwnProperty('id')) {
  //     return;
  //   }
  //   return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  // },
  
  async deleteRestoran(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  async putRestoran(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  },
  async searchRestoran(query) {
    return (await this.getSemuaRestoran()).filter((resto) => {
      const loweredCaseRestoTitle = (resto.title || '-').toLowerCase();
      const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

export default FavoriteRestaurantIdb;
