(() => {
  const storeKey = window.location.pathname.split('/')[1];
  const favorite = document.querySelector('.icon-favorite');
  let favoritesStore = JSON.parse(localStorage.getItem(storeKey)) || false;
  favorite.addEventListener('click', clickFavorite);

  function clickFavorite(e) {
    const favorite = e.currentTarget;
    if (favorite.classList[2] === 'active') {
      removeFromStoreById();
      favorite.classList.remove('active');
    } else {
      favorite.classList.add('active');
      addToStore();
    }
  }

  if (favoritesStore) {
    favorite.classList.add('active');
  }

  function removeFromStoreById(id) {
    localStorage.setItem(storeKey, JSON.stringify(false));
  }

  function addToStore() {
    localStorage.setItem(storeKey, JSON.stringify(true));
    favoritesStore = JSON.parse(localStorage.getItem(storeKey));
  }
})();
