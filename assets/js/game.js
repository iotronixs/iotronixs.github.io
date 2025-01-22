 // Hardcoded target date for the countdown (e.g., January 15, 2025 at 00:00:00 UTC)
 const targetDate = new Date("April 26, 2025 00:00:00 UTC").getTime();

 function updateCountdown() {
     const now = new Date().getTime();  // Get current time
     const remainingTime = targetDate - now;  // Time remaining until the target date

     if (remainingTime <= 0) {
         // If the countdown ends
         document.getElementById("countdown").innerHTML = "<div class='countdown-item'>Countdown Ended</div>";
         clearInterval(countdownInterval); // Stop the countdown
     } else {
         // Calculate days, hours, minutes, and seconds remaining
         const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
         const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

         // Update the countdown timer with leading zero formatting
         document.getElementById("days").textContent = days < 10 ? '0' + days : days;
         document.getElementById("hours").textContent = hours < 10 ? '0' + hours : hours;
         document.getElementById("minutes").textContent = minutes < 10 ? '0' + minutes : minutes;
         document.getElementById("seconds").textContent = seconds < 10 ? '0' + seconds : seconds;
     }
 }

 // Update countdown every second
 const countdownInterval = setInterval(updateCountdown, 1000);
 updateCountdown(); // Initial call to display the countdown immediately

//Email form submission logic
 var form = document.getElementById("email-form");
 async function handleSubmit(event) {
 event.preventDefault();
 var status = document.getElementById("my-form-status");
 var data = new FormData(event.target);
 fetch(event.target.action, {
 method: form.method,
 body: data,
 headers: {
     'Accept': 'application/json'
 }
 }).then(response => {
 if (response.ok) {
     status.innerHTML = "Thanks for your submission!";
     form.reset()
     setTimeout(() => {
             status.innerHTML = ""; // Clear the status message
         }, 2000);
 } else {
     response.json().then(data => {
     if (Object.hasOwn(data, 'errors')) {
     status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
     } else {
     status.innerHTML = "Oops! There was a problem submitting your form"
     }
 })
 }
 }).catch(error => {
 status.innerHTML = "Oops! There was a problem submitting your form"
 });
 }
 form.addEventListener("submit", handleSubmit)
