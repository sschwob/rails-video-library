const updateList = () => {
  if (document.querySelector('.icon-library')) {
    const addIcons = document.querySelectorAll('.icon-library')
    addIcons.forEach((icon) => {
      icon.addEventListener('click', (event) => {
        const target = event.currentTarget
        const movieTmdbId = target.dataset.movieid;

        if (target.classList.contains('i-active')) {
          $.ajax({
            type: "POST",
            url: '/removelibrary',
            data: { movieId: movieTmdbId }
          });
          target.dataset.originalTitle = "Ajouter à Ma Vidéothèque";
          target.classList.remove('i-active');
        } else {
          $.ajax({
            type: "POST",
            url: '/addlibrary',
            data: { movieId: movieTmdbId }
          });
          target.classList.add('i-active');
          target.dataset.originalTitle = "Retirer de Ma Vidéothèque";
        }
      });
    });
  }
}

export { updateList };