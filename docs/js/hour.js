function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    document.getElementById("clock").textContent = time;
}

updateClock(); // initial update
setInterval(updateClock, 1000); // update every second
