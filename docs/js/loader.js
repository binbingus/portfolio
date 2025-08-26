document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('loading-entry');
    const loader = document.getElementById('loader');
    const href = btn ? btn.getAttribute('href') : null;
    if (btn && loader) {
        btn.addEventListener('click', function() {
            event.preventDefault();
            loader.style.visibility = 'visible'; // Show the loader
            setTimeout(() => {
                if (href) {
                    window.location.href = href; // Navigate to the specified href
                } else {    
                    window.location.href = 'desktop.html';
                }
            }, 1000);
        });
    }
});