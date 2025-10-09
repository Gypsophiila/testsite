// Подсветка активной страницы в навигации
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const page = link.getAttribute('data-page');
    if ((page === 'home' && currentPage === 'index') || page === currentPage) {
      link.classList.add('active');
    }
  });

  // Клик по логотипу — переход на главную
  const logo = document.getElementById('logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }
});