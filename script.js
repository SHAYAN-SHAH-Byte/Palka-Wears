document.addEventListener("DOMContentLoaded", function () {
    // Set a fixed launch date
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 47);
    launchDate.setHours(0, 1, 22, 0); 

    function calculateTime() {
        const now = new Date();
        const timeDiff = launchDate - now;

        if (timeDiff <= 0) {
            document.querySelector(".countdown").innerHTML = "<p>We're Live!</p>";
            return;
        }

        const d = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const h = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = d;
        document.getElementById("hours").innerText = h;
        document.getElementById("minutes").innerText = m;
        document.getElementById("seconds").innerText = s;
    }

    // Run once immediately
    calculateTime();

    // Update every second
    setInterval(calculateTime, 1000);
});
