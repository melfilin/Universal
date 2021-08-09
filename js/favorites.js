const favorites = document.querySelectorAll('.news-main__favorite');

const favoritesStore = JSON.parse(localStorage.getItem('favorites')) || [];

favorites.forEach((favorite, index) => {
  favorite.setAttribute('data-id', index);
  favorite.addEventListener('click', () => {
    if (favorite.classList[1] === 'active') {
      removeFromStoreById(index);
      favorite.classList.remove('active');
    } else {
      favorite.classList.add('active');
      favoritesStore.push({ id: index });
      addToStore();
    }
  });
});

favoritesStore.forEach((favorite) => {
  const favoriteNode = document.querySelector(`[data-id="${favorite.id}"]`);
  favoriteNode.classList.add('active');
});

function removeFromStoreById(id) {
  const temp = favoritesStore.filter((el) => el.id !== id);
  localStorage.setItem('favorites', JSON.stringify(temp));
}

function addToStore() {
  localStorage.setItem('favorites', JSON.stringify(favoritesStore));
}
