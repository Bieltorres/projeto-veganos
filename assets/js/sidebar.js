const filterButton = document.querySelector('.btn-open-filters');
const closeButton = document.querySelector('.btn-close-sidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.querySelector('.overlay');

filterButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('openOverlay');
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('openOverlay');
});

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !filterButton.contains(e.target)) {
        sidebar.classList.remove('open');
        overlay.classList.remove('openOverlay');
    }
});
