const assert = require('assert');
const { async } = require('regenerator-runtime');

Feature('(Un)Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Favorite Resto kosong. Tambahkan sekarang!', '.restaurant-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-item__content a');

  const firstResto = locate('.restaurant-item__content a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestoTitle = await I.grabTextFrom('.restaurant-item__content a');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unliking one resto', async ({ I }) => {
  I.see('Favorite Resto kosong. Tambahkan sekarang!', '.resto-item__not__found');
  I.amOnPage('/');

  I.seeElement('.restaurant-item__content a');

  const firstResto = locate('.restaurant-item__content a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item a');
  const firstLikedResto = locate('.restaurant-item__content a').first();
  const firstLikedRestoTitle = await I.grabTextFrom(firstLikedResto);

  assert.strictEqual(firstRestoTitle, firstLikedRestoTitle);

  I.click(firstLikedResto);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.dontSee('Favorite Resto kosong. Tambahkan sekarang!', '.restaurant-item__not__found');
});
