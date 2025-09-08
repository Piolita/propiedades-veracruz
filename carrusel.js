// Este script inicializa el carrusel para pantallas de PC.

// Espera a que el DOM esté completamente cargado antes de ejecutar el código.
document.addEventListener('DOMContentLoaded', function() {
  // Selecciona el carrusel de PC por su ID.
  const pcCarousel = document.querySelector('#pcCarousel');
  
  // Si el carrusel existe, lo inicializa.
  if (pcCarousel) {
    new bootstrap.Carousel(pcCarousel, {
      interval: 5000, // Cambia la imagen cada 5 segundos
      wrap: true // Permite que el carrusel se repita
    });
  }
});