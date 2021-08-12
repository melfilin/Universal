(() => {
  const favorites = document.querySelectorAll('.news-main__favorite');
  let favoritesStore = JSON.parse(localStorage.getItem('favorites')) || [];

  favorites.forEach((favorite, i) => {
    favorite.setAttribute('data-id', i);
    favorite.addEventListener('click', clickFavorite(i));
  });

  function clickFavorite(i) {
    return (e) => {
      const favorite = e.currentTarget;
      if (favorite.classList[1] === 'active') {
        removeFromStoreById(i);
        favorite.classList.remove('active');
      } else {
        favorite.classList.add('active');
        addToStore(i);
      }
    };
  }

  favoritesStore.forEach((favorite) => {
    const favoriteNode = document.querySelector(`[data-id="${favorite.id}"]`);
    favoriteNode.classList.add('active');
  });

  function removeFromStoreById(id) {
    favoritesStore = favoritesStore.filter((el) => el.id !== id);
    localStorage.setItem('favorites', JSON.stringify(favoritesStore));
  }

  function addToStore(i) {
    const temp = JSON.parse(localStorage.getItem('favorites')) || [];
    temp.push({ id: i });
    localStorage.setItem('favorites', JSON.stringify(temp));
    favoritesStore = JSON.parse(localStorage.getItem('favorites'));
  }
})();
