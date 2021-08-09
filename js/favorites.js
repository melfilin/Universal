const favorites = document.querySelectorAll('.news-main__favorite');

const favoritesStore = JSON.parse(localStorage.getItem('favorites')) || [];

favorites.forEach((favorite, index) => {
  favorite.setAttribute('data-id', index);
  console.log(index, favoritesStore[index]?.id);
  if (favoritesStore.length && index === favoritesStore[index]?.id) {
    favorite.classList.add('active');
  }

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

function removeFromStoreById(id) {
  const temp = favoritesStore.filter((el) => el.id !== id);
  localStorage.setItem('favorites', JSON.stringify(temp));
}

function addToStore() {
  localStorage.setItem('favorites', JSON.stringify(favoritesStore));
}
