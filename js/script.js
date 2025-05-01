function filterPhotos(category) {
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
      photo.style.display = category === 'all' || photo.classList.contains(category) ? 'block' : 'none';
    });
  }
  

  // Charger la galerie dans la page
// Charger dynamiquement la galerie
fetch('galerie.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('galerie-dynamique').innerHTML = data;

    // Charger le script de filtrage après injection
    const script = document.createElement('script');
    script.src = 'js/script.js';
    document.body.appendChild(script);
  })
  .catch(error => console.error('Erreur de chargement de la galerie :', error));
