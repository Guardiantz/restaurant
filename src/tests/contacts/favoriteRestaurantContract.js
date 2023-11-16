const itActsAsFavoriteRestoModel = (favoriteResto) => {
    it('should return the resto that has been added', async () => {
      favoriteResto.putRestoran({ id: 1 });
      favoriteResto.putRestoran({ id: 2 });
  
      expect(await favoriteResto.getRestoran(1)).toEqual({ id: 1 });
      expect(await favoriteResto.getRestoran(2)).toEqual({ id: 2 });
      expect(await favoriteResto.getRestoran(3)).toEqual(undefined);
    });
  
    it('should refuse a resto from being added if it does not have the correct property', async () => {
      favoriteResto.putRestoran({ aProperty: 'property' });
  
      expect(await favoriteResto.getSemuaRestoran()).toEqual([]);
    });
  
    it('can return all of the resto that have been added', async () => {
      favoriteResto.putRestoran({ id: 1 });
      favoriteResto.putRestoran({ id: 2 });
  
      expect(await favoriteResto.getSemuaRestoran()).toEqual([{ id: 1 }, { id: 2 }]);
    });
  
    it('should remove favorite resto', async () => {
      favoriteResto.putRestoran({ id: 1 });
      favoriteResto.putRestoran({ id: 2 });
      favoriteResto.putRestoran({ id: 3 });
  
      await favoriteResto.deleteRestoran(1);
  
      expect(await favoriteResto.getSemuaRestoran()).toEqual([{ id: 2 }, { id: 3 }]);
    });
  
    it('should handle request to remove a resto even though the resto has not been added', async () => {
      favoriteResto.putRestoran({ id: 1 });
      favoriteResto.putRestoran({ id: 2 });
      favoriteResto.putRestoran({ id: 3 });
  
      await favoriteResto.deleteRestoran(4);
  
      expect(await favoriteResto.getSemuaRestoran()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });
  
    it('should be able to search for restaurants', async () => {
      favoriteResto.putRestoran({ id: 1, title: 'resto a' });
      favoriteResto.putRestoran({ id: 2, title: 'resto b' });
      favoriteResto.putRestoran({ id: 3, title: 'resto abc' });
      favoriteResto.putRestoran({ id: 4, title: 'ini mah resto abcd' });
  
      expect(await favoriteResto.searchRestoran('resto a')).toEqual([
        { id: 1, title: 'resto a' },
        { id: 3, title: 'resto abc' },
        { id: 4, title: 'ini mah resto abcd' },
      ]);
    });
  };
  
  // eslint-disable-next-line import/prefer-default-export
  export { itActsAsFavoriteRestoModel };
  