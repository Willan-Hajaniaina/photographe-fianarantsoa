function filterPhotos(category) {
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
      photo.style.display = category === 'all' || photo.classList.contains(category) ? 'block' : 'none';
    });
  }
  