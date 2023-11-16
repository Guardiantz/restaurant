import API_ENDPOINT from '../globals/api-endpoint';

class SumberRestoran {
  static async daftarRestoran() {
    const respons = await fetch(API_ENDPOINT.LIST);
    const responsJson = await respons.json();
    return responsJson.restaurants;
  }

  static async detailRestoran(id) {
    const respons = await fetch(API_ENDPOINT.DETAIL(id));
    const responsJson = await respons.json();
    return responsJson.restaurant;
  }
}

export default SumberRestoran;
