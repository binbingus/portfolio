document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('loading-entry');
    const loader = document.getElementById('loader');
    if (btn && loader) {
        btn.addEventListener('click', function() {
            loader.style.visibility = 'visible'; // Show the loader
            setTimeout(() => {
                window.location.href = 'desktop.html';
            }, 1000);
        });
    }
});