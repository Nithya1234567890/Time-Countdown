document.getElementById('set-btn').onclick = function() {
    const dateInput = document.getElementById('date').value;
    const countDownDate = new Date(dateInput).getTime();

    if (isNaN(countDownDate)) {
        alert("Please set a valid date and time.");
        return;
    }

    // Clear any previous intervals
    clearInterval(window.countdownInterval);

    // Update the count down every 1 second
    window.countdownInterval = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the corresponding elements
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(window.countdownInterval);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}
