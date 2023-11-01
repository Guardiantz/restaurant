import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { NAMA_DATABASE, VERSI_DATABASE, NAMA_OBJEK_TOKO } = CONFIG;

const dbPromise = openDB(NAMA_DATABASE, VERSI_DATABASE, {
  upgrade(database) {
    database.createObjectStore(NAMA_OBJEK_TOKO, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async dapatkanRestoran(id) {
    return (await dbPromise).get(NAMA_OBJEK_TOKO, id);
  },
  async dapatkanSemuaRestoran() {
    return (await dbPromise).getAll(NAMA_OBJEK_TOKO);
  },
  async simpanRestoran(restoran) {
    return (await dbPromise).put(NAMA_OBJEK_TOKO, restoran);
  },
  async hapusRestoran(id) {
    return (await dbPromise).delete(NAMA_OBJEK_TOKO, id);
  },
};

export default FavoriteRestaurantIdb;
